package com.guardjo.simple.coin.market.apiserver;

import org.springframework.boot.SpringApplication;

public class TestCoinApiServerApplication {

	public static void main(String[] args) {
		SpringApplication.from(CoinApiServerApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
