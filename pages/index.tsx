import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Socials from "../components/Socials";

export default function Home() {
	return (
		<div className="text-primaryText h-full flex justify-center">
			<Head>
				<title>Ashley Kennedy</title>
				<meta name="description" content="Ashley Kennedy's Portfolio" />
				<meta name="author" content="Ashley Kennedy" />
				<link rel="icon" href="https://emojicdn.elk.sh/👨‍💻?style=microsoft" />
			</Head>
			<section className="pt-16 pl-3 pr-3 md:pl-9 md:pr-9 max-w-6xl">
				<Header />

				<Socials />
				<section>
					<About />
				</section>
				<section>
					<Projects />
				</section>
			</section>
		</div>
	);
}
