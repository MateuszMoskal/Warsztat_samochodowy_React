


export interface Klient {
    klientID: number;
    imie: string;
    nazwisko: string;
    telefon: string;
    email: string;
}

export interface Pojazd {
    pojazdID: string;
    rejestracja: string;
    marka: string;
    model: string;
    rocznik: number;
    vin: string;
}

export interface Mechanik {
    mechanikID: number;
    imie: string;
    nazwisko: string;
    czyZatrudniony: string;
    login: string;
    haslo: string;
}

export interface Naprawa {
    naprawaID: number;
    data_rozpoczecia: Date;
    data_zakonczenia: Date;
    stan: string;
    opis_usterki: string;
    protokol_naprawy: string;
    telefon_klienta: string;
}

export interface NaprawaDto {
    mechanik: Mechanik;
    naprawaID: number;
}

export interface PojazdKlientDto {
    pojazd: Pojazd;
    telefon_klienta: string;
}

export interface ZgloszenieDto {
    klient: Klient;
    pojazd: Pojazd;

}