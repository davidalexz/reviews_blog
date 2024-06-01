import { orbitron } from '@/app/fonts';

export default function Heading({ children }: Readonly<{ children: React.ReactNode }>) {
	return <h1 className="font-bold font-orbitron text-2xl pb-3">{children}</h1>;
}
