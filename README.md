# simple-coin-market
간단 코인 거래소 만들기 with React

# 요구사항

- 거래소에서 거래 중인 코인 정보를 볼 수 있다.
    - 해당 코인에 대한 매수, 매도 요청이 가능하다.
- 코인 거래 이력을 볼 수 있다.
    - 최신순으로 출력된다.
- 코인 거래 이력을 검색할 수 있다.

# 서버 환경

## frontend

- node v20.12.2
- yarn 1.22.9
- React 18.2.0
- styled-components 6.1.8
- storybook 8.0.9

## backend

- java 17
- gradle
- spring-boot 3.2.7
    - configuration-processor
    - devtools
    - web
    - test
    - docker-compose
- postgresql, spring-data-jpa
- testcontainer
- lombok

# 메인화면 mockup

![](./docs/simple_coin_markter_mockup.png)

# API 명세

## /api/coins `GET`

마켓 내 존재하는 코인 목록 반환

## /api/coins/transactions `GET`

### params

- code : 코인 코드
- min : 최소 거래가
- max : 최대 거래가

## API 요청 흐름

### 코인 목록 조회 요청

```mermaid
sequenceDiagram

Actor user
participant browser
participant server
participant DB

user ->> browser : 웹페이지 접근
browser ->> server : GET : /api/coins
server ->> DB : 코인 목록 조회
DB ->> server : 코인 목록 반환
server ->> browser : 가공된 코인 목록 반환
browser ->> user : coin 카드 목록 렌더링
browser ->> user : 코인 검색 종류 렌더링
```

### 거래 현황 검색 결과 요청

```mermaid
sequenceDiagram

Actor user
participant browser
participant server
participant DB

user ->> browser : 특정 코인 거래 현황 검색 요청
browser ->> server : GET : /api/coins/transactions
server ->> DB : 거래 현황 데이터 조회 요청
DB ->> server : 거래 현황 데이터 반환
server ->> browser : 해당 코인의 거래 현황 데이터 반환
browser ->> user : 거래 현황 테이블 렌더링
```

# ERD

```mermaid
erDiagram
virtual_coin {
    id bigint pk "식별키"
    code varchar(10) uk "식별코드"
    coin_name varchar(20) "코인명"
    total_price bigint "시가총액"
    current_price bigint "현재거래액"
    create_time datetime "생성일자"
    update_time datetime "갱신일자"
}
```