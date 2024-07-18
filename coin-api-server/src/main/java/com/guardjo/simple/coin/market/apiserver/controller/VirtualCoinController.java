package com.guardjo.simple.coin.market.apiserver.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guardjo.simple.coin.market.apiserver.domain.model.VirtualCoin;
import com.guardjo.simple.coin.market.apiserver.service.VirtualCoinService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class VirtualCoinController {
	private final VirtualCoinService virtualCoinService;

	@GetMapping(UrlContext.COINS_URL)
	public List<VirtualCoin> getCoins() {
		log.info("GET : {}", UrlContext.COINS_URL);
		return virtualCoinService.findAllCoins();
	}
}
