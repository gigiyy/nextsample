create table cash_posting (
    cob_date date not null,
    trigger_flag char(1) not null
);

create table app_id (
    id_type varchar(15) not null,
    id_value varchar(15) not null
);