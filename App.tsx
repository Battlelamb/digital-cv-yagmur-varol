import React, { useRef, useState } from 'react';
import type { CvData, Experience, Education } from './types';
import Section from './components/Section';

// Add type declarations for window properties from CDN scripts
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
    html2pdf: any;
  }
}

const cvData: CvData = {
  name: 'Yağmur Varol',
  title: 'Risk Yönetimi Uzmanı',
  photoUrl: '/profile-2.png',
  contact: {
    phone: '+90 506 068 29 69',
    email: 'yagmurrvaroll@gmail.com',
  },
  experience: [
    {
      company: 'DESTEK BANK',
      period: 'Ekim 2025 - Devam',
      title: 'Risk Yönetimi Uzman Yardımcısı',
      responsibilities: [
        'Bankanın maruz kaldığı kredi, piyasa, likidite, operasyonel ve faiz oranı risklerini tanımlamak, ölçmek, izlemek ve raporlamak',
        'Risk politikaları, limitler ve prosedürlerin hazırlanmasına katkı sağlamak',
        'Risk analiz modelleri (ör. PD, LGD, VAR, stres testi, senaryo analizi) geliştirmek ve uygulamak',
        'Kredi portföyü ve menkul kıymet portföyü bazında risk yoğunluklarını değerlendirmek',
        'Sermaye yeterliliği oranı (SYR) ve ISEDES (İçsel Sermaye Yeterliliği Değerlendirme Süreci) çalışmalarına destek vermek',
        'Risk raporlarını düzenli olarak üst yönetime, risk komitesine ve ilgili birimlere sunmak',
        'Banka genelinde risk iştahı çerçevesi ve limit yönetimi uygulamalarının takibini yapmak',
        'Stres testleri ve duyarlılık analizleri ile potansiyel risk senaryolarını değerlendirmek',
        'Yeni ürün ve süreçlerde risk değerlendirmesi (New Product Approval Process) yürütmek',
        'Veri doğruluğu ve model kalibrasyonu süreçlerini izlemek, model validasyonlarına destek vermek',
        'BDDK, TCMB ve Basel III düzenlemelerine uygun risk ölçüm metodolojilerini uygulamak',
        'Risk kültürünün geliştirilmesi ve çalışan farkındalığının artırılması için iç iletişim ve eğitim süreçlerine katkı sağlamak',
        'İç denetim, iç kontrol ve uyum birimleri ile koordineli çalışarak risklerin etkin yönetimini desteklemek',
        'Yönetim kurulu risk komitesine sunulacak periyodik risk raporlarının hazırlanmasına katkıda bulunmak',
        'Operasyonel kayıp veri tabanı oluşturmak ve olay bazlı risk analizlerini yürütmek'
      ],
    },
    {
      company: 'PARAM',
      period: 'Haziran 2024 - Ekim 2025',
      title: 'Risk Yönetimi Uzmanı',
      responsibilities: [
        'Bireysel ve Ticari kredi müşteri analizi; Finansal yapı ve uygulanabilirlik testlerinin sağlanması',
        'B2C B2B kredi kanallarına istinaden müşteri ediniminde skorkart yapılandırmasına destek olmak ve takip etmek,',
        'Geçmiş ve Geleceğe yönelik müşteri analizlerini piyasa şartlarına göre analiz etmek',
        'Portföy inceleme; Gecikme ve NPL olasılıklarını piyasa şartlarına göre belirleme analizleri',
        'Bildirimlere istinaden günlük validasyon alımı',
        'Tekil ve toplu blacklist alımı',
        'Emakin /thh/bddk/mides/iç müşteri gibi kanallardan gelen şikayetlerin karşılanması',
        'Güncel mevzuat ve regülasyonların takip edilmesi ve sisteme entegrasyonun sağlanması',
        'Günlük Haftalık ve Aylık şirket politika ve prosedürleri kapsamında raporlama ve uyarı sistemlerinin geliştirilmesinde destek olmak',
        'Günlük ve aylık Risk Merkezi Raporlamalarının Sağlanması (KRM-KRS-KLKR)',
        'Müşteri riskinin izlenmesi ve risk merkezi üzerinden kontrollerinin sağlanması'
      ]
    },
    {
      company: 'VAKIFBANK',
      period: 'Ağustos – Eylül 2022',
      title: 'Stajyer',
      responsibilities: [
        'Müşteri veri analizleri ve raporlamalarında görev aldım, Excel ve banka içi sistemleri kullanarak temel analizler gerçekleştirdim.',
        'Şube çalışanlarından birebir bildirim alarak müşteri ilişkileri konusunda gözlem yapma imkanı buldum.'
      ]
    }
  ],
  education: [
     {
      institution: 'MİMAR SİNAN GÜZEL SANATLAR ÜNİVERSİTESİ',
      period: '2019 - 2024',
      field: 'İstatistik',
      score: 'Diploma puanı: 3,23'
    },
    {
      institution: 'FATMA EMİN KUTVAR ANADOLU LİSESİ',
      period: '2015 - 2019',
      field: 'Lise',
      score: 'Diploma puanı: 90,75'
    }
  ],
  programs: ['MS Office', 'SPSS', 'R Studio', 'SQL'],
  languages: ['İngilizce (orta seviye)', 'Almanca (başlangıç)', 'Rusça (başlangıç)'],
  hobbies: ['Profesyonel bale', 'Yan flüt', 'Snowboard'],
};

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between items-baseline">
      <h4 className="text-lg font-bold text-gray-800">{item.company}</h4>
      <p className="text-sm text-gray-500 font-medium">{item.period}</p>
    </div>
    <p className="text-md text-sky-700 italic mb-2">{item.title}</p>
    <ul className="list-none pl-0 space-y-2 text-gray-600">
      {item.responsibilities.map((resp, i) => (
        <li key={i} className="flex items-start">
          <span className="text-sky-700 font-bold mr-3 mt-1 text-lg leading-none">•</span>
          <span>{resp}</span>
        </li>
      ))}
    </ul>
  </div>
);

const EducationItem: React.FC<{ item: Education }> = ({ item }) => (
  <div className="mb-4 last:mb-0">
     <div className="flex justify-between items-baseline">
        <h4 className="text-lg font-bold text-gray-800">{item.institution}</h4>
        <p className="text-sm text-gray-500 font-medium">{item.period}</p>
    </div>
    <p className="text-md text-gray-600">{item.field}</p>
    {item.score && <p className="text-sm text-gray-500">{item.score}</p>}
  </div>
);

const App: React.FC = () => {
  const cvRef = useRef<HTMLElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = async () => {
    const element = cvRef.current;
    if (!element) {
      alert("CV content not found.");
      return;
    }

    // Verify element has content
    if (element.scrollWidth === 0 || element.scrollHeight === 0) {
      alert("CV content appears to be empty. Please wait for the page to fully load.");
      return;
    }

    setIsGeneratingPdf(true);

    try {
      // Check libraries
      if (!window.html2canvas || !window.jspdf) {
        alert("PDF generation libraries not loaded. Please refresh the page.");
        return;
      }

      const html2canvas = window.html2canvas;
      const jspdfNamespace = window.jspdf;
      
      // Get jsPDF constructor
      let jsPDF: any;
      if (jspdfNamespace.jsPDF) {
        jsPDF = jspdfNamespace.jsPDF;
      } else if ((jspdfNamespace as any).default?.jsPDF) {
        jsPDF = (jspdfNamespace as any).default.jsPDF;
      } else if (typeof jspdfNamespace === 'function') {
        jsPDF = jspdfNamespace;
      } else {
        throw new Error('Could not find jsPDF constructor');
      }

      // Hide download button
      const downloadButton = document.querySelector('.no-print') as HTMLElement;
      const originalDisplay = downloadButton?.style.display;
      if (downloadButton) {
        downloadButton.style.display = 'none';
      }

      // Scroll element into view to ensure it's fully rendered
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
      
      // Wait for any transitions/animations and ensure fonts are loaded
      await new Promise(resolve => setTimeout(resolve, 300));

      // Ensure all images are loaded
      const images = element.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map((img: HTMLImageElement) => {
          if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Continue even if image fails
            setTimeout(resolve, 3000); // Timeout after 3 seconds
          });
        })
      );

      // Wait for fonts to load (especially Tailwind CDN fonts)
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      // Get the actual rendered dimensions
      const rect = element.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(element);
      
      console.log('Element details:', {
        scrollWidth: element.scrollWidth,
        scrollHeight: element.scrollHeight,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        boundingRect: { width: rect.width, height: rect.height },
        computedStyle: {
          width: computedStyle.width,
          height: computedStyle.height,
          display: computedStyle.display,
          visibility: computedStyle.visibility
        }
      });

      // Capture EXACTLY what's rendered - match webpage layout precisely
      const canvas = await html2canvas(element, {
        scale: 2, // 2x resolution for quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: false,
        removeContainer: false,
        imageTimeout: 15000,
        // Capture exact rendered dimensions
        width: element.offsetWidth || element.scrollWidth,
        height: element.offsetHeight || element.scrollHeight,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.offsetWidth || element.scrollWidth,
        windowHeight: element.offsetHeight || element.scrollHeight,
        onclone: (clonedDoc: Document, clonedElement: HTMLElement) => {
          // Ensure all styles are preserved in cloned document
          const clonedMain = clonedDoc.querySelector('[data-cv-content]') || clonedElement;
          if (clonedMain) {
            // Preserve exact layout styles
            (clonedMain as HTMLElement).style.visibility = 'visible';
            (clonedMain as HTMLElement).style.display = 'grid';
            (clonedMain as HTMLElement).style.width = `${element.offsetWidth}px`;
            (clonedMain as HTMLElement).style.height = 'auto';
            (clonedMain as HTMLElement).style.maxWidth = 'none';
            (clonedMain as HTMLElement).style.margin = '0';
            
            // Ensure grid layout is preserved
            const computedStyle = window.getComputedStyle(element);
            (clonedMain as HTMLElement).style.gridTemplateColumns = computedStyle.gridTemplateColumns;
            (clonedMain as HTMLElement).style.gap = computedStyle.gap;
            
            // Hide download button in clone
            const clonedButton = clonedDoc.querySelector('.no-print') as HTMLElement;
            if (clonedButton) {
              clonedButton.style.display = 'none';
            }
          }
        }
      });

      console.log('Canvas created:', {
        width: canvas.width,
        height: canvas.height,
        dataLength: canvas.toDataURL().length
      });

      // Verify canvas has content
      if (canvas.width === 0 || canvas.height === 0) {
        throw new Error('Canvas is empty - element may not be visible');
      }

      // Restore button
      if (downloadButton) {
        downloadButton.style.display = originalDisplay || '';
      }

      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Verify image data
      if (!imgData || imgData === 'data:,') {
        throw new Error('Failed to generate image data from canvas');
      }

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // A4 dimensions in mm
      const A4_WIDTH = 210;
      const A4_HEIGHT = 297;
      const MARGIN = 10;
      const CONTENT_WIDTH = A4_WIDTH - (MARGIN * 2);
      const CONTENT_HEIGHT = A4_HEIGHT - (MARGIN * 2);
      
      // Calculate scaling - maintain exact aspect ratio
      // Convert canvas pixels to mm using the scale factor
      // At scale 2, 1 CSS pixel = 2 canvas pixels
      // Standard: 96 DPI = 96 pixels per inch = 25.4mm per inch
      // So: 1 CSS pixel = 25.4/96 mm = 0.264583mm
      const cssPixelsToMm = 0.264583;
      const cssWidth = imgWidth / 2; // Divide by scale (2)
      const cssHeight = imgHeight / 2;
      const imgWidthMm = cssWidth * cssPixelsToMm;
      const imgHeightMm = cssHeight * cssPixelsToMm;
      
      // Scale to fit width while maintaining aspect ratio
      const widthRatio = CONTENT_WIDTH / imgWidthMm;
      const scaledWidth = CONTENT_WIDTH;
      const scaledHeight = imgHeightMm * widthRatio;
      
      console.log('Scaling calculation:', {
        elementDimensions: {
          offsetWidth: element.offsetWidth,
          offsetHeight: element.offsetHeight,
          scrollWidth: element.scrollWidth,
          scrollHeight: element.scrollHeight
        },
        canvasPixels: { width: imgWidth, height: imgHeight },
        cssPixels: { width: cssWidth, height: cssHeight },
        mm: { width: imgWidthMm, height: imgHeightMm },
        scaled: { width: scaledWidth, height: scaledHeight },
        ratio: widthRatio,
        aspectRatio: cssWidth / cssHeight
      });
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Handle multi-page - maintain exact layout proportions
      const pageHeight = CONTENT_HEIGHT;
      const totalPages = Math.max(1, Math.ceil(scaledHeight / pageHeight));
      
      console.log('PDF dimensions:', {
        imgWidthMm,
        imgHeightMm,
        scaledWidth,
        scaledHeight,
        totalPages,
        pageHeight: CONTENT_HEIGHT,
        aspectRatioPreserved: (scaledWidth / scaledHeight).toFixed(4)
      });
      
      // Add image to PDF maintaining exact proportions
      for (let i = 0; i < totalPages; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        // Calculate y position to show correct portion of content
        const yPosition = MARGIN - (i * pageHeight);
        // Use exact scaled dimensions to preserve layout
        pdf.addImage(
          imgData, 
          'PNG', 
          MARGIN, 
          yPosition, 
          scaledWidth, 
          scaledHeight,
          undefined,
          'FAST' // Use FAST for better compatibility
        );
      }

      pdf.save('Yagmur_Varol_CV.pdf');
      console.log('PDF saved successfully');
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Full error:", error);
      alert(`An error occurred while generating the PDF: ${errorMessage}\n\nPlease check the browser console for details.`);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 font-sans text-gray-700">
      
      <button
        onClick={handleDownloadPdf}
        disabled={isGeneratingPdf}
        className="no-print fixed top-4 right-4 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 z-50 transition-transform transform hover:scale-110 disabled:bg-gray-400 disabled:cursor-not-allowed"
        aria-label="Download CV as PDF"
      >
        {isGeneratingPdf ? <Spinner className="w-6 h-6" /> : <DownloadIcon className="w-6 h-6" />}
      </button>

      <main ref={cvRef} data-cv-content className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 print:shadow-none print:rounded-none">
        
        {/* Left Column (Sidebar) */}
        <aside className="md:col-span-1 bg-gray-50 p-8 border-r border-gray-200">
          <div className="flex justify-center mb-8 pt-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
              <img 
                src={cvData.photoUrl}
                alt={cvData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Section title="İLETİŞİM">
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-sky-600 mr-3" />
                <a href={`tel:${cvData.contact.phone}`} className="hover:text-sky-700 break-all">{cvData.contact.phone}</a>
              </div>
              <div className="flex items-center">
                <EmailIcon className="w-5 h-5 text-sky-600 mr-3" />
                <a href={`mailto:${cvData.contact.email}`} className="hover:text-sky-700 break-all">{cvData.contact.email}</a>
              </div>
            </div>
          </Section>

          <Section title="PROGRAMLAR">
            <ul className="list-none pl-0 space-y-2">
               {cvData.programs.map(p => (
                <li key={p} className="flex items-center">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="DİL BİLGİSİ">
            <ul className="list-none pl-0 space-y-2">
              {cvData.languages.map(l => (
                 <li key={l} className="flex items-center">
                   <span className="text-sky-600 mr-2">•</span>
                   <span>{l}</span>
                 </li>
              ))}
            </ul>
          </Section>

          <Section title="İLGİ ALANLARI">
            <ul className="list-none pl-0 space-y-2">
              {cvData.hobbies.map(h => (
                <li key={h} className="flex items-center">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Section>
        </aside>

        {/* Right Column (Main Content) */}
        <div className="md:col-span-2 p-8 md:p-12">
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-tight">{cvData.name}</h1>
            <h2 className="text-2xl text-sky-700 mt-2 font-medium">{cvData.title}</h2>
          </header>

          <Section title="İŞ DENEYİMİ">
            {cvData.experience.map((exp, index) => (
              <ExperienceItem key={index} item={exp} />
            ))}
          </Section>

          <Section title="EĞİTİM">
            {cvData.education.map((edu, index) => (
              <EducationItem key={index} item={edu} />
            ))}
          </Section>

        </div>
      </main>
    </div>
  );
};

export default App;
