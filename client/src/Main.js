import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Divider from './Divider';
import Content from './Content';
import Footer from './Footer';
import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';

const headers = { a: 'Co znajdziesz w audycie?', b: 'Jest tego całkiem sporo!', c: 'Koniecznie to sprawdź!' };
const texts = {
	a: 'Oprócz ogólnej oceny konta, oceniamy szereg parametrów - każdy przedstawiony osobno i opatrzony krótkim opisem. Szybkość ładowania strony, ocena stopnia optymalizacji zasobów strony, analiza treści, dostępność dla robotów, widoczność względem konkurentów i szereg innych czynników, mających wpływ na pozycję witryny w wyszukiwarce.',
	b: ['Testy 404', 'Porównanie do witryn konkurencyjnych', 'Analiza prawidłowego opisu składowych witryny', 'Ocena kontrastu i uporządkowania', 'Analiza poprawnego używania meta tagów', 'Analiza dobrych praktyk z zakresu SEO'],
	c: ['Analiza treści, nagłówków i linkowań', 'Analiza wydajności mobile', 'Analiza wyglądu strony w trakcie ładowania', 'Ocena optymalizacji obrazów stosowanych na stronie', 'Ocena cache', 'Analiza swobodnego dostępu dla robotów sieciowych'],
};

export default function Main() {
	document.title = 'Strona Główna — Audyt Ads&Seo';
	return (
		<div className="App">
			<Header />
			<Landing />
			<Divider />
			<Content cstyle={'flex-col'} istyle={'justify-center md:justify-end'} image={c} header={headers.a} text={texts.a} type={'paragraph'} />
			<Content cstyle={'md:flex-row-reverse'} istyle={'justify-start'} image={a} header={headers.b} text={texts.b} type={'list'} />
			<Content cstyle={'flex-col'} image={b} istyle={'justify-end'} header={headers.c} text={texts.c} type={'list'} />
			<Footer />
		</div>
	);
}
