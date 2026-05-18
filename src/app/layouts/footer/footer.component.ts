import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive, TranslateDirective],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	protected readonly navItems = [
		{ label: 'Nav', icon: 'navigation', route: '/navigation', exact: true },
		{ label: 'Rooms', icon: 'hotel', route: '/rooms', exact: true },
		{ label: 'Contact', icon: 'call', route: '/contacts', exact: true },
		{ label: 'About', icon: 'info', route: '/about', exact: true },
		{ label: 'FAQ', icon: 'help', route: '/questions', exact: true },
	];
}
