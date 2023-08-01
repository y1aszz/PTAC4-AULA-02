'use client'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

export default function PagePrivate() {
    const { push } = useRouter();
    const handlerRemoveToken = () => {
        Cookies.remove('token');
        push('/');
    };
    return (
        <div>
            <h1>Página Privada</h1>
            <button onClick={() => handlerRemoveToken()}>Remover Token</button>
        </div>
    )
}