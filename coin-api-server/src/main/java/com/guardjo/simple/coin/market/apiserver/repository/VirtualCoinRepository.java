package com.guardjo.simple.coin.market.apiserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guardjo.simple.coin.market.apiserver.domain.VirtualCoinEntity;

public interface VirtualCoinRepository extends JpaRepository<VirtualCoinEntity, Long> {
}
