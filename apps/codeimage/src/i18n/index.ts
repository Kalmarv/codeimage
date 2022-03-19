export const locale = {
  it: {
    common: {
      close: 'Chiudi',
      confirm: 'Conferma',
    },
    locales: {
      it: 'Italiano',
      en: 'Inglese',
    },
    toolbar: {
      export: 'Esporta',
      share: 'Condividi',
      exportLoading: 'Esportando...',
    },
    pwa: {
      offline: 'App pronta per lavorare offline',
      update:
        'Nuovo contenuto disponibile, ricarica il contenuto per aggiornare',
      close: 'Chiudi',
      reload: 'Ricarica',
    },
    export: {
      title: 'Esporta immagine',
      shareMode: 'Condividi il tuo codice',
      shareHint: 'Questa modalità usa la nuova',
      noOpacitySupportedWithThisExtension:
        'La transparenza personalizzata non è compatibile con questa estensione',
      exportMode: 'Esporta come immagine',
      fileName: 'Nome file',
      fileNamePlaceholder: 'Inserisci nome file...',
      extensionType: 'Estensione file',
      pixelRatio: 'Scala',
      genericSaveError: 'Si è verificato un errore durante il salvataggio',
      quality: 'Qualità',
    },
    shortcut: {
      esc: 'Esc',
      buttonAction: 'Scorciatoie tastiera',
      focusCodeEditor: 'Focus editor di codice',
      unFocusCodeEditor: 'Unfocus editor di codice',
      toggleBackground: 'Attiva/disattiva background',
      toggleDarkMode: 'Attiva/disattiva modalitá dark',
      toggleHeader: 'Mostra/nascondi intestazione',
      toggleWatermark: 'Mostra/nascondi watermark',
      selectLanguage: 'Seleziona lingua',
      changePadding: 'Modifica padding',
      pickRandomTheme: 'Seleziona tema random',
      export: 'Esporta',
      copyLink: 'Copia link',
      openShortcuts: 'Apri scorciatoie',
    },
  },
  en: {
    common: {
      close: 'Close',
      confirm: 'Confirm',
    },
    locales: {
      it: 'Italian',
      en: 'English',
    },
    toolbar: {
      export: 'Export',
      share: 'Share',
      exportLoading: 'Exporting...',
    },
    pwa: {
      offline: 'App ready to work offline',
      update: 'New content available, click on reload button to update',
      close: 'Close',
      reload: 'Reload',
    },
    export: {
      title: 'Export image',
      shareMode: 'Share your code',
      shareHint: 'This modality uses the new',
      exportMode: 'Export as image',
      fileName: 'File name',
      fileNamePlaceholder: 'Enter file name...',
      extensionType: 'File extension',
      pixelRatio: 'Scale',
      genericSaveError: 'An error occurred while saving',
      noOpacitySupportedWithThisExtension:
        'The custom transparency is not compatible with this extension',
      quality: 'Quality',
    },
    shortcut: {
      esc: 'Esc',
      buttonAction: 'Keyboard shortcuts',
      focusCodeEditor: 'Focus code editor',
      unFocusCodeEditor: 'Unfocus code editor',
      toggleBackground: 'Toggle background',
      toggleDarkMode: 'Toggle dark mode',
      toggleHeader: 'Toggle header',
      toggleWatermark: 'Toggle watermark',
      changePadding: 'Change padding',
      pickRandomTheme: 'Pick random theme',
      export: 'Export',
      copyLink: 'Copy link',
      openShortcuts: 'Open shortcuts',
    },
  },
};

export type AppLocaleEntries = typeof locale;
