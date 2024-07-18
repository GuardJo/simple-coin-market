package com.guardjo.simple.coin.market.apiserver.service;

import static org.assertj.core.api.AssertionsForClassTypes.*;
import static org.mockito.BDDMockito.*;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;
import com.guardjo.simple.coin.market.apiserver.domain.model.VirtualCoin;
import com.guardjo.simple.coin.market.apiserver.repository.VirtualCoinRepository;
import com.guardjo.simple.coin.market.apiserver.utils.TestDataGenerator;

@ExtendWith(MockitoExtension.class)
class VirtualCoinServiceTest {
	@Mock
	private VirtualCoinRepository virtualCoinRepository;

	@InjectMocks
	private VirtualCoinService virtualCoinService;

	@DisplayName("전체 가상코인 목록 조회")
	@Test
	void test_findAllCoins() {
		List<VirtualCoinEntity> coinEntityList = List.of(
			TestDataGenerator.virtualCoinEntity(1L, "test1", 1000),
			TestDataGenerator.virtualCoinEntity(2L, "test2", 2000)
		);

		List<String> expectedPriceList = List.of("1,000", "2,000");

		given(virtualCoinRepository.findAll()).willReturn(coinEntityList);

		List<VirtualCoin> actual = virtualCoinService.findAllCoins();

		assertThat(actual).isNotNull();
		assertThat(actual.size()).isEqualTo(2);

		for (int i = 0; i < actual.size(); i++) {
			assertThat(actual.get(i).code()).isEqualTo(coinEntityList.get(i).getCode());
			assertThat(actual.get(i).coinName()).isEqualTo(coinEntityList.get(i).getCoinName());
			assertThat(actual.get(i).currentPrice()).isEqualTo(expectedPriceList.get(i));
		}

		then(virtualCoinRepository).should().findAll();
	}
}