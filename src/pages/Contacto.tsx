const Contacto: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 mt-24 space-y-12">            
            <h1 className="text-4xl font-bold text-center text-gray-800">
                CONTACTO
            </h1>
           
                <p className="text-center text-gray-600 mb-4">
                    Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Correo electrónico: jorcornejo3777@gmail.com</li>
                    <li>Teléfono: 0983036256</li>
                    <li>Dirección: pronto disponible</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Estamos dispuestos a ayudarte en lo que necesites.
                </p>                
            
        </div>
    );
};            

export default Contacto;                                