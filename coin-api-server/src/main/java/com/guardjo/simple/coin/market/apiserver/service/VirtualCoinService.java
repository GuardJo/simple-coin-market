package com.guardjo.simple.coin.market.apiserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.guardjo.simple.coin.market.apiserver.domain.model.VirtualCoin;
import com.guardjo.simple.coin.market.apiserver.repository.VirtualCoinRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class VirtualCoinService {
	private final VirtualCoinRepository virtualCoinRepository;

	/**
	 * 저장된 모든 가상코인 목록을 반환한다.
	 * @return 가상코인 목록
	 */
	public List<VirtualCoin> findAllCoins() {
		log.debug("FindAll VirtualCoins");
		List<VirtualCoin> virtualCoins = virtualCoinRepository.findAll().stream()
			.map(VirtualCoin::fromEntity)
			.toList();

		log.info("Found VirtualCoins, total = {}", virtualCoins.size());
		
		return virtualCoins;
	}
}
