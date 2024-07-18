create sequence virtual_coin_id_seq;

create table virtual_coin
(
    id            bigint primary key not null default nextval('virtual_coin_id_seq'),
    code          varchar(10)        not null unique,
    coin_name     varchar(20)        not null,
    total_price   bigint             not null default 0,
    current_price bigint             not null default 0,
    create_time   timestamp          not null default CURRENT_TIMESTAMP,
    modified_time timestamp          not null default CURRENT_TIMESTAMP
);