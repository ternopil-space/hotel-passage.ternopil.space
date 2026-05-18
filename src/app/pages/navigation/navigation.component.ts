import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navItems = [
		{ label: 'Menu', icon: 'restaurant_menu', route: '/rooms' },
		{ label: 'Contacts', icon: 'call', route: '/contacts' },
		{ label: 'About us', icon: 'info', route: '/about' },
		{ label: 'FAQ', icon: 'help', route: '/questions' },
		{ label: 'Info rules', icon: 'gavel', route: '/rules' },
		{ label: 'Services', icon: 'room_service', route: '/products' },
		{ label: 'Offers', icon: 'local_offer', route: '/discounts' },
		{ label: 'Gallery', icon: 'photo_library', route: '/gallery' },
		{ label: 'Team', icon: 'group', route: '/team' },
		{ label: 'Jobs', icon: 'work', route: '/jobs' },
		{ label: 'Articles', icon: 'article', route: '/articles' },
		{ label: 'Public reviews', icon: 'rate_review', route: '/reviews' },
		{ label: 'Visit plans', icon: 'event', route: '/events' },
		{ label: 'Guest tips', icon: 'map', route: '/quests' },
		{ label: 'Regular guests', icon: 'workspace_premium', route: '/loyalty' },
	];
}
