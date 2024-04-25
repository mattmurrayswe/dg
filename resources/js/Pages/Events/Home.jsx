import { Link } from '@inertiajs/react';
import { CssBaseline } from '@mui/material';
import * as React from 'react';

export default function Home({ }) {

    const bgDotsLighter = {
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E")'
      };

      const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

    return (
        <div>
            <CssBaseline />
            <div style={bgDotsLighter} className='bg-center bg-gray-900 text-white min-h-screen'>
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className='flex items-center md:ml-16 lg:ml-16 xl:ml-16'>
                        <div className='w-[120px]'>
                            <img src={dgFastenComBr} alt=""/>
                        </div>
                        <p className='text-white text-[40px] m-0 mx-6'>|</p>
                    </div>
                    <div className='w-fit text-center'>
                        
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <Link
                            href={route('organizer')}
                            className="scale-100 p-6 bg-gray-800/50 bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-gray-500/20 shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                        >
                            <div>
                                <h2 className="mt-6 text-xl font-semibold text-white">Área do Organizador</h2>
                                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                                    Organize seus eventos automotivos. Emissão de ingressos, gateway de pagamentos, estatísticas dos seus eventos e disparo de campanhas de marketing.
                                </p> 
                            </div>
                        </Link>
                        <Link
                            href={route('visitante')}
                            className="scale-100 p-6 bg-gray-800/50 bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-gray-500/20 shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                        >
                            <div>
                                <h2 className="mt-6 text-xl font-semibold text-white">Área do Visitante</h2>
                                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                                    Encontre, participe de eventos. Torne seu projeto automotivo conhecido e aumente seu nível de influência.
                                </p> 
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
