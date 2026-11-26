# BİYOMODÜL – Oku, dokun, sök, keşfet

Kalp, göz ve beyin için 3B yazıcıda basılabilen, sökülebilir, yazılı biyoloji modelleri ve QR kodla açılan etkileşimli rehber.
11. sınıf biyoloji (MEB, Türkiye Yüzyılı Maarif Modeli) kavramlarıyla eşleştirilmiştir (`KITAP_UYUMU.md`).

TÜBİTAK 2204-A Lise Öğrencileri Araştırma Projeleri, 2027.

## Site ne yapar
- Üç modeli tarayıcıda döndürme, kesit alma, parçalara ayırma
- Yapıları keşfetme, "Yolculuk" turları, "Bul bakalım" oyunu, doğru/yanlış soruları
- Çalışma kâğıdı ve QR poster çıktısı, sesli okuma, büyük yazı, yüksek kontrast
- İnternet olmadan da çalışır (ilk açılıştan sonra önbellek)
- Baskı rehberi ve malzeme hesaplayıcı ("Hazırla" sekmesi)

## GitHub Pages ile yayınlama
1. GitHub'da `biyomodul` adlı **public** bir depo açın.
2. **Add file → Upload files** ile bu klasörün **içindekileri** yükleyin (`index.html` en üstte olmalı).
   En büyük dosya yaklaşık 12 MB; GitHub'ın tarayıcıdan yükleme sınırı 25 MB'tır.
3. **Settings → Pages → Branch: main, /(root) → Save.**
4. Birkaç dakika sonra adres: `https://KULLANICIADI.github.io/biyomodul/`
5. Hazır baskı seti (ölçeklenmiş STL'ler, zip): **Releases → Draft a new release**, sürüm adı `v1.0`, iki zip dosyasını ekleyip yayınlayın. Sitedeki "Hazırla" sekmesindeki indirme düğmesi bu sayfaya kendiliğinden bağlanır.

Bilgisayarda denemek için: bu klasörde `python -m http.server` çalıştırıp `http://localhost:8000` adresini açın (dosyaya çift tıklayınca modeller yüklenmez).

Model bağlantıları: `#kalp`, `#goz`, `#beyin`. Tek yapıya doğrudan bağlantı: `#beyin/hipofiz` gibi.
Ölçüm modu: adresin sonuna `?olcum` ekleyin.

## Klasörler
| Klasör | İçerik |
|---|---|
| `modeller/` | Ekranda gösterilen hafif 3B modeller (.glb, Draco sıkıştırmalı) |
| `indir/` | 1:1 ölçekli kaynak STL dosyaları ve okunabilirlik test kuponu |
| `lib/` | three.js ve yardımcı kütüphaneler (okul ağında dış sunucu engellense de çalışsın diye yerel) |
| `LISANSLAR/` | Kaynaklar, lisanslar, FreeSurfer Part B metni |

## Lisans ve kaynaklar
Kalp modeli BodyParts3D (CC BY-SA 2.1 JP) verisinden, beyin dış yüzeyi FreeSurfer fsaverage5 verisinden türetilmiş **değiştirilmiş** sürümlerdir. Ayrıntılar `LISANSLAR/OKU.md` dosyasındadır; atıfları silmeyin.
