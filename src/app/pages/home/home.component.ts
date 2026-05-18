import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ArticleService } from '@wawjs/ngx-horeca';
import { companyProfile } from '../../feature/company/company.data';
import { DiscountService } from '@wawjs/ngx-horeca';
import { EventService } from '@wawjs/ngx-horeca';
import { JobService } from '@wawjs/ngx-horeca';
import { ProductService } from '@wawjs/ngx-horeca';
import { ProfileService } from '@wawjs/ngx-horeca';
import { QuestService } from '@wawjs/ngx-horeca';
import { ReviewService } from '@wawjs/ngx-horeca';
import { RoomService } from '@wawjs/ngx-horeca';

type FeaturePreview = {
	eyebrow: string;
	title: string;
	summary: string;
	meta?: string;
	itemRoute: string;
	allRoute: string;
	seeAllLabel: string;
	imageSrc?: string;
	imageAlt?: string;
};

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	private readonly _articleService = inject(ArticleService);
	private readonly _discountService = inject(DiscountService);
	private readonly _eventService = inject(EventService);
	private readonly _jobService = inject(JobService);
	private readonly _productService = inject(ProductService);
	private readonly _profileService = inject(ProfileService);
	private readonly _questService = inject(QuestService);
	private readonly _reviewService = inject(ReviewService);
	private readonly _roomService = inject(RoomService);

	protected readonly company = companyProfile;
	protected readonly venueHighlights = [
		'Public sources describe Nad Stavom as a branded Opillia pub with beer, snacks, main dishes and complex lunches.',
		'Hours are publicly listed as 11:00-23:00 every day, with no break noted by List.in.ua.',
		'Phone, email, exact menu, prices, delivery rules and event capacity should be verified by the owner before being presented as official guarantees.',
	];
	protected readonly quickFacts = [
		'Pub / bar',
		'Biletska 33',
		'11:00-23:00',
		'Beer',
		'Snacks',
		'Complex lunches',
		'Summer terrace',
		'Football viewing',
	];
	protected readonly featurePreviews = computed(() => {
		const article = this._articleService.articles()[0];
		const discount = this._discountService.discounts()[0];
		const event = this._eventService.events()[0];
		const job = this._jobService.jobs()[0];
		const product = this._productService.products()[0];
		const profile = this._profileService.profiles()[0];
		const quest = this._questService.quests()[0];
		const review = this._reviewService.reviews()[0];
		const room = this._roomService.rooms()[0];
		const previews: Array<FeaturePreview | null> = [
			article
				? {
						eyebrow: 'Guest guide',
						title: article.title,
						summary: article.summary,
						meta: article.category,
						itemRoute: `/article/${article.slug}`,
						allRoute: '/articles',
						seeAllLabel: 'Read guest guides',
					}
				: null,
			room
				? {
						eyebrow: 'Menu direction',
						title: room.name,
						summary: room.description,
						meta: room.price,
						itemRoute: `/room/${room.slug}`,
						allRoute: '/rooms',
						seeAllLabel: 'View menu directions',
						imageSrc: room.image,
						imageAlt: room.imageAlt,
					}
				: null,
			discount
				? {
						eyebrow: 'Booking note',
						title: discount.title,
						summary: discount.summary,
						meta: discount.period,
						itemRoute: `/discount/${discount.slug}`,
						allRoute: '/discounts',
						seeAllLabel: 'View offers',
					}
				: null,
			event
				? {
						eyebrow: 'Visit plan',
						title: event.title,
						summary: event.summary,
						meta: event.dateLabel,
						itemRoute: `/event/${event.slug}`,
						allRoute: '/events',
						seeAllLabel: 'View visit plans',
					}
				: null,
			product
				? {
						eyebrow: 'Pub service',
						title: product.title,
						summary: product.summary,
						meta: product.price,
						itemRoute: `/product/${product.slug}`,
						allRoute: '/products',
						seeAllLabel: 'View services',
					}
				: null,
			review
				? {
						eyebrow: 'Public signal',
						title: review.title,
						summary: review.body,
						meta: review.author,
						itemRoute: `/review/${review.slug}`,
						allRoute: '/reviews',
						seeAllLabel: 'Read impressions',
					}
				: null,
			quest
				? {
						eyebrow: 'Guest guide',
						title: quest.title,
						summary: quest.summary,
						meta: quest.duration,
						itemRoute: `/quest/${quest.slug}`,
						allRoute: '/quests',
						seeAllLabel: 'View guides',
					}
				: null,
			job
				? {
						eyebrow: 'Job',
						title: job.title,
						summary: job.summary,
						meta: job.location,
						itemRoute: `/job/${job.slug}`,
						allRoute: '/jobs',
						seeAllLabel: 'View pub jobs',
					}
				: null,
			profile
				? {
						eyebrow: 'Pub team',
						title: profile.name,
						summary: profile.description,
						meta: profile.role,
						itemRoute: `/profile/${profile.slug}`,
						allRoute: '/team',
						seeAllLabel: 'Meet the team',
						imageSrc: profile.image,
						imageAlt: profile.name,
					}
				: null,
		];

		return previews.filter((preview): preview is FeaturePreview => preview !== null);
	});

	constructor() {
		effect(() => {
			this._articleService.loadTranslations();
			this._discountService.loadTranslations();
			this._eventService.loadTranslations();
			this._jobService.loadTranslations();
			this._productService.loadTranslations();
			this._profileService.loadTranslations();
			this._questService.loadTranslations();
			this._reviewService.loadTranslations();
			this._roomService.loadTranslations();
		});
	}
}
