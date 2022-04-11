CREATE DATABASE DB_Bus_System

USE DB_Bus_System

/*1. Orari */
create table Orari(
Id int identity(1,1) primary key not null,
Week_Day varchar(30),
Starting_hour varchar(30),
Ending_hour varchar(30)
);

/*2.Linja*/
create table Linja(
Id int identity(1,1) primary key not null,
Pickup_location varchar(30),
Destination_locaion varchar(30),
Price decimal (5,2),
Duration varchar(30)
);

/*3.Pompa per furnizim */
create table Pompa(
Id int identity(1,1) primary key not null,
Name varchar(40),
Adress varchar(50)
);

/* 4.Garazha */
create table Garazha(
Id int identity(1,1) primary key not null,
StreetName varchar(40),
City varchar(30)
);

/*5. Kompania*/
create table Kompania(
Id int identity(1,1) primary key not null,
Name varchar(30),
Adress varchar(40),
City varchar (20) not null,
Email varchar(40),
ContactNumber varchar(20)
);

/*6. Autobusi */
create table Autobusi(
Id int identity(1,1) primary key not null,
Number int,
Capacity int,
FuelCapacity int,
Garazha_Id int foreign key references Garazha(Id),
Kompania_Id int foreign key references Kompania(Id),
Pompa_Id int foreign key references Pompa(Id)
);

/*7. Stafi */
create table Stafi(
Id int identity(1,1) primary key not null,
Name varchar(30),
Surname varchar(30),
PhoneNumber varchar(20),
Email varchar(40),
Position varchar(30),
Bus_Id int foreign key references Autobusi(Id),
Orari_Id int foreign key references Orari(Id),
Kompania_Id int foreign key references Kompania(Id)
);


/*8. Ulesja */
create table Ulesja(
Id int identity(1,1) primary key not null,
Number int,
Status varchar(30),
Bus_Id int foreign key references Autobusi(Id)
);

/*9. Klienti */
create table Klienti(
Id int identity(1,1) primary key not null,
Name varchar(20) not null,
Surname varchar(20) not null,
PhoneNumber varchar(20) not null,
Email varchar(40) not null,
Password varchar(30) not null
);


/*10. Contact us */
create table ContactUs(
Id int identity(1,1) primary key not null,
Name varchar(20) not null,
Surname varchar(20) not null,
PhoneNumber varchar(20) not null,
Email varchar(40) not null,
Message varchar(60) not null
);

/*11. Pushimet */
create table Pushimet(
Id int identity(1,1) primary key not null,
Stafi_Id int foreign key references Stafi(Id),    
PVjetore varchar(10), 
PMjekesore varchar(10)
);

/*12. Ofertat */

create table Oferta(
Id int identity(1,1) primary key not null,
Description varchar(200),
Price decimal (5,2),
Bus_Id int foreign key references Autobusi(Id),
Kompania_Id int foreign key references Kompania(Id)
);

/* 13.Rezervo */
create table BookingTicket(
Id int identity(1,1) primary key not null, 
Name varchar(20) not null,
Surname varchar(20) not null, 
Email varchar(40) not null, 
PhoneNumber varchar(20) not null, 
City varchar (20) not null,
Type varchar(30) not null, 
Bus_Id int foreign key references Autobusi(Id),   
Ulesja_Id int foreign key references Ulesja(Id), 
Linja_Id int foreign key references Linja(Id)    
                                                 
);

/*14. Anulo Bileten*/
Create table CancelBooking(
Id int identity(1,1) primary key not null,
Booking_Id int foreign key references BookingTicket(Id), 
Email varchar(40) not null
);


/*15. Rent a Bus */
create table Rent(
Id int identity(1,1) primary key not null,
Name varchar(20) not null, 
Surname varchar(20) not null, 
Email varchar(40) not null, 
PhoneNumber varchar(20) not null,
PersonalNumber int not null,
NumberOfPeople int not null,
PickupDate varchar(20)  not null,
DropDate varchar(20)  not null,
Kompania_Id int foreign key references Kompania(Id)
);