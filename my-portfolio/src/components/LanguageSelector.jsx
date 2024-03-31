import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'EN' },
    es: { nativeName: 'ES' }
};

const LanguageSelector = () => {
    const { i18n } = useTranslation();


    return (
        <>
            <div className="w-1/10 text-white rounded-md text-xs bg-black/30 hover:bg-black/70 transition-all">
                {Object.keys(lngs).map((lng) => (
                    <button
                        className="inline-flex justify-center items-center w-1/2 px-3 py-2"
                        key={lng}
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                        type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </>
    );
};

export default LanguageSelector;
