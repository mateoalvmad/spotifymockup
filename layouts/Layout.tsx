import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className="main-container">
        <Sidebar />
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    </div>
  )
}

export {Layout} ;