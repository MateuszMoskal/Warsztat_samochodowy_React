


export interface Klient {
    klientID: number;
    imie: string;
    nazwisko: string;
    telefon: string;
    email: string;
}

export interface Pojazd {
    //pojazdID: string;
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
    mechanik: Mechanik;
    pojazd: Pojazd;
    data_rozpoczecia: string;
    data_zakonczenia: string;
    stan: string;
    opis_usterki: string;
    protokol_naprawy: string;
    telefon_klienta: string;
}

export interface NaprawaDto {
    mechanikLogin: string;
    naprawaID: number;
}

export interface PojazdKlientDto {
    pojazd: Pojazd;
    telefonKlienta: string;
}

export interface ZgloszenieDto {
    klient: Klient;
    pojazd: Pojazd;

}

export interface LoginRequest {
    login: string;
    haslo: string;
}

export const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) {
        return ""; // Return an empty string if the input is null or undefined
    }
    return dateString.slice(0, 10); // Extract YYYY-MM-DD
};

export const formatUsername = (mechanik: Mechanik | null | undefined): string => {
    if (!mechanik) {
        return ""; // Return an empty string if the input is null or undefined
    }
    return mechanik.login; // Extract YYYY-MM-DD
};
