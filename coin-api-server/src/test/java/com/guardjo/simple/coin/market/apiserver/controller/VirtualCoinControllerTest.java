package com.guardjo.simple.coin.market.apiserver.controller;

import static org.assertj.core.api.AssertionsForClassTypes.*;
import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.guardjo.simple.coin.market.apiserver.domain.model.VirtualCoin;
import com.guardjo.simple.coin.market.apiserver.service.VirtualCoinService;
import com.guardjo.simple.coin.market.apiserver.utils.TestDataGenerator;

@WebMvcTest(controllers = {VirtualCoinController.class})
class VirtualCoinControllerTest {
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;

	@MockBean
	private VirtualCoinService virtualCoinService;

	@DisplayName("GET : " + UrlContext.COINS_URL)
	@Test
	void test_getCoins() throws Exception {
		List<VirtualCoin> expected = List.of(
			TestDataGenerator.virtualCoin(1L, "테스트1", "1,000", "2,000"),

			TestDataGenerator.virtualCoin(1L, "테스트2", "2,000", "3,000"),

			TestDataGenerator.virtualCoin(1L, "테스트3", "3,000", "4,000")
		);

		given(virtualCoinService.findAllCoins()).willReturn(expected);

		String response = mockMvc.perform(get(UrlContext.COINS_URL)
				.header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
			.andDo(print())
			.andExpect(status().isOk())
			.andReturn()
			.getResponse()
			.getContentAsString(StandardCharsets.UTF_8);

		JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, VirtualCoin.class);
		List<VirtualCoin> actual = objectMapper.readValue(response, javaType);

		assertThat(actual).isNotNull();
		assertThat(actual.size()).isEqualTo(expected.size());

		for (int i = 0; i < actual.size(); i++) {
			assertThat(actual.get(i)).isEqualTo(expected.get(i));
		}

		then(virtualCoinService).should().findAllCoins();
	}
}