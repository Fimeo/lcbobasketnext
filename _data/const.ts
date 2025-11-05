import logo from "@/assets/images/logo/lcbo_logo.png";
import {TeamNumber} from "@/data/teams";

export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/lcbobasket',
    facebook: 'https://facebook.com/LCBOBasket',
};

export const GENERAL_INFO = {
    address: 'Gymnase de l\'Église, 14760 Bretteville sur Odon',
    mail: 'lcbobasket@laposte.net',
    phone: '06 89 78 30 39',
    licenceNumber: 250,
    teamNumber: TeamNumber(),
    logo: logo,
    clubCode: 'NOR0014042',
    clubId: '11402',
};

export function FormatShortDate(dateInput: Date | string): string {
    const date = new Date(dateInput);
    return date.toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    }).replace('.', '');
}

export function FormatTime(dateInput: Date | string): string {
    const date = new Date(dateInput);
    return date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}