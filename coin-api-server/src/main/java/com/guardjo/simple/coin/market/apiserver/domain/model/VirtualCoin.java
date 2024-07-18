package com.guardjo.simple.coin.market.apiserver.domain.model;

import java.text.NumberFormat;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;

public record VirtualCoin(
	Long id,
	String code,
	String coinName,
	String totalPrice,
	String currentPrice
) {
	public static VirtualCoin fromEntity(VirtualCoinEntity entity) {
		String totalPrice = NumberFormat.getNumberInstance().format(entity.getTotalPrice());
		String currentPrice = NumberFormat.getNumberInstance().format(entity.getCurrentPrice());
		return new VirtualCoin(
			entity.getId(),
			entity.getCode(),
			entity.getCoinName(),
			totalPrice,
			currentPrice
		);
	}
}
