INSERT INTO `ilmoittautuneet` (`Etunimi`,`Sukunimi`,`sposti`,`allergiat`) VALUES
('Severi', 'Moisio','severi.moisio@hotmail.fi','muna'),
('Susanna', 'Heinonen','severi.moisio@hotmail.fi','-'); 
select idvieraat,Etunimi, Sukunimi,sposti,allergiat from ilmoittautuneet;

select idvieraat,Etunimi, Sukunimi,sposti,allergiat from ilmoittautuneet;

select distinct sposti from ilmoittautuneet;

select allergiat from ilmoittautuneet;

select * from ilmoittautuneet;
select * from kirjautuminen;

delete from ilmoittautuneet where idvieraat = 15;

select * from ilmoittautuneet where aikuinen = 0;

select salasana from kirjautuminen where kayttajatunnus = 'Moisiot2022';