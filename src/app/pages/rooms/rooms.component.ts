import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoomService } from '@wawjs/ngx-horeca';
import { TranslateDirective } from '@wawjs/ngx-translate';

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslateDirective],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	private readonly _roomService = inject(RoomService);

	protected readonly amenities = [
		'26 rooms',
		'24/7 reception',
		'Private bathroom',
		'Flat-screen TV',
		'Electric kettle',
		'Wi-Fi / internet',
		'Parking / street parking',
		'Daily housekeeping',
		'Elevator / lift',
		'Air conditioning',
		'Heating',
		'Family rooms',
		'Non-smoking rooms',
	];
	protected readonly loadingCards = [1, 2, 3];
	protected readonly rooms = this._roomService.rooms;
	protected readonly isLoading = this._roomService.isLoading;
	protected readonly hasRooms = computed(() => this.rooms().length > 0);

	protected readonly contactLinks: ContactLink[] = [
		{
			label: 'Call us',
			href: 'tel:+380675101504',
			description: '+38 067 510-15-04',
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/hotel_passage/',
			description: '@hotel_passage public listing',
		},
		{
			label: 'Map / address',
			href: 'https://www.google.com/maps/search/?api=1&query=Torgovytsia%207%20Ternopil%20Hotel%20Passage',
			description: 'Torgovytsia / Zhyvova 7, Ternopil',
		},
	];

	constructor() {
		effect(() => {
			this._roomService.loadTranslations();
		});
	}
}
