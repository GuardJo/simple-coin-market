package com.guardjo.simple.coin.market.apiserver.utils;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;

public class TestDataGenerator {
	private TestDataGenerator() {

	}

	public static VirtualCoinEntity virtualCoinEntity(String code, int price) {
		return VirtualCoinEntity.builder()
			.code(code)
			.coinName(code + " 코인")
			.currentPrice(price)
			.totalPrice(price * 1000L)
			.build();
	}
}
