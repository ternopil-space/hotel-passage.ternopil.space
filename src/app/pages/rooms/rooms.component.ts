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
		'Beer',
		'Snacks',
		'Main dishes',
		'Complex lunches',
		'Ukrainian cuisine',
		'European cuisine',
		'Grill dishes',
		'Outdoor seating',
		'Wi-Fi',
		'TV / football viewing',
		'Takeaway',
		'Delivery listed publicly',
		'Booking listed publicly',
	];
	protected readonly loadingCards = [1, 2, 3];
	protected readonly rooms = this._roomService.rooms;
	protected readonly isLoading = this._roomService.isLoading;
	protected readonly hasRooms = computed(() => this.rooms().length > 0);

	protected readonly contactLinks: ContactLink[] = [
		{
			label: 'Call candidate',
			href: 'tel:+380977993984',
			description: '+380 97 799 3984',
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/nadsstavom/',
			description: '@nadsstavom',
		},
		{
			label: 'Map / address',
			href: 'https://maps.app.goo.gl/P3iGmyqzQQkoJRAeA',
			description: 'Білецька, 33, Тернопіль',
		},
	];

	constructor() {
		effect(() => {
			this._roomService.loadTranslations();
		});
	}
}
