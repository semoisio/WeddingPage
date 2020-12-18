INSERT INTO `ilmoittautuneet` (`Etunimi`,`Sukunimi`,`sposti`,`allergiat`) VALUES
('Severi', 'Moisio','severi.moisio@hotmail.fi','muna'),
('Susanna', 'Heinonen','severi.moisio@hotmail.fi','-'); 


select idvieraat,Etunimi, Sukunimi,sposti,allergiat from ilmoittautuneet;

select distinct sposti from ilmoittautuneet;

select allergiat from ilmoittautuneet;