package com.guardjo.simple.coin.market.apiserver.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.testcontainers.junit.jupiter.Testcontainers;

import com.guardjo.simple.coin.market.apiserver.config.JpaConfig;
import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;
import com.guardjo.simple.coin.market.apiserver.utils.TestDataGenerator;

@Import(JpaConfig.class)
@DataJpaTest
@Testcontainers
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class VirtualCoinRepositoryTest {
	@Autowired
	private VirtualCoinRepository virtualCoinRepository;

	private final static List<VirtualCoinEntity> TEST_DATA_LIST = new ArrayList<>();
	private final static int TEST_DATA_SIZE = 5;

	@BeforeEach
	void setUp() {
		for (int i = 0; i < TEST_DATA_SIZE; i++) {
			VirtualCoinEntity virtualCoinEntity = TestDataGenerator.virtualCoinEntity("test" + i, (i + 1) * 1000);
			virtualCoinRepository.save(virtualCoinEntity);
			TEST_DATA_LIST.add(virtualCoinEntity);
		}
	}

	@AfterEach
	void tearDown() {
		virtualCoinRepository.deleteAll();
		TEST_DATA_LIST.clear();
	}

	@DisplayName("신규 Enttiy 저장 테스트")
	@Test
	void test_save() {
		VirtualCoinEntity newEntity = TestDataGenerator.virtualCoinEntity("new", 999);

		virtualCoinRepository.save(newEntity);
		long currentCount = virtualCoinRepository.count();

		assertThat(newEntity.getId()).isNotNull();
		assertThat(currentCount).isEqualTo(TEST_DATA_SIZE + 1);
	}

	@DisplayName("단일 Entity 조회 테스트")
	@Test
	void test_findById() {
		VirtualCoinEntity expected = TEST_DATA_LIST.get(0);

		VirtualCoinEntity actual = virtualCoinRepository.findById(expected.getId())
			.orElseThrow();

		assertThat(actual).isEqualTo(expected);
	}

	@DisplayName("전체 Entity 조회 테스트")
	@Test
	void test_findAll() {
		List<VirtualCoinEntity> actuals = virtualCoinRepository.findAll();

		for (int i = 0; i < actuals.size(); i++) {
			assertThat(actuals.get(i)).isEqualTo(TEST_DATA_LIST.get(i));
		}
	}

	@DisplayName("특정 VitualCoin의 현재가격 수정 테스트")
	@Test
	void test_updateCurrentPrice() {
		VirtualCoinEntity expected = TEST_DATA_LIST.get(0);
		long id = expected.getId();
		long oldPrice = expected.getCurrentPrice();
		long updatePrice = 1234;

		VirtualCoinEntity oldActual = virtualCoinRepository.findById(id).orElseThrow();
		assertThat(oldActual.getCurrentPrice()).isEqualTo(oldPrice);

		oldActual.setCurrentPrice(updatePrice);
		virtualCoinRepository.flush();

		VirtualCoinEntity newActual = virtualCoinRepository.findById(id).orElseThrow();
		assertThat(newActual.getId()).isEqualTo(oldActual.getId());
		assertThat(newActual.getCurrentPrice()).isEqualTo(updatePrice);
	}

	@DisplayName("특정 Enttiy 삭제 테스트")
	@Test
	void test_deleteById() {
		VirtualCoinEntity expected = TEST_DATA_LIST.get(0);

		virtualCoinRepository.deleteById(expected.getId());

		assertThat(virtualCoinRepository.count()).isEqualTo(TEST_DATA_SIZE - 1);
	}
}