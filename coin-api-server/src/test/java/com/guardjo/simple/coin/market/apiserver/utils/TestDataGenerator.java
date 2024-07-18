package com.guardjo.simple.coin.market.apiserver.utils;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;

public class TestDataGenerator {
	private TestDataGenerator() {

	}

	public static VirtualCoinEntity virtualCoinEntity(String code, int price) {
		return virtualCoinEntity(null, code, price);
	}

	public static VirtualCoinEntity virtualCoinEntity(Long id, String code, int price) {
		return VirtualCoinEntity.builder()
			.id(id)
			.code(code)
			.coinName(code + " 코인")
			.currentPrice(price)
			.totalPrice(price * 1000L)
			.build();
	}
}
