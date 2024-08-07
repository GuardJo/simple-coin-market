package com.guardjo.simple.coin.market.apiserver.utils;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;
import com.guardjo.simple.coin.market.apiserver.domain.model.VirtualCoin;

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

	public static VirtualCoin virtualCoin(Long id, String code, String currentPrice, String totalPrice) {
		return new VirtualCoin(id, code, code + "코인", currentPrice, totalPrice);
	}
}
