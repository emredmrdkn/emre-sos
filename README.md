# SOS

Arkadaşlarınla tarayıcı üzerinden canlı SOS düellosu yap. Kolay (5×5), zor (8×8), özel oda, turnuva ve izleyici modları bulunur.

## Arkadaşınla oynamak

1. Oyunun yayın bağlantısını aç ve oyuncu adını gir.
2. **Özel Oda** bölümünü seç, istersen oda şifresi belirle ve **Oda Kur** düğmesine bas.
3. **WhatsApp** düğmesiyle oda davetini arkadaşına gönder.
4. Arkadaşın davet bağlantısını açınca aynı odaya katılır. İkiniz de oyunun bulunduğu sekmeye geri dönerek oynayabilirsiniz.

Oda sahibi oyunu açık tutmalıdır. Telefon tarayıcıları WhatsApp'a geçince bağlantıyı bekletebilir; oyuna geri dönünce otomatik yeniden bağlanma devreye girer. Ana bağlantı herkese oyunu açar; aynı maça girmek için oda davet bağlantısını paylaşın.

## GitHub Pages

Bu proje derleme gerektirmeyen statik bir web oyunudur. GitHub deposunun **Settings → Pages** bölümünde **Deploy from a branch**, **main**, **/(root)** seçilerek yayınlanabilir. `.nojekyll` dosyası dahildir.

Manifest, simgeler ve servis çalışanı GitHub Pages proje alt yollarıyla uyumludur. Çevrimiçi oyun HTTPS üzerinden Web Crypto ve WebSocket kullanır; dosyayı çift tıklayarak açmak çevrimiçi yayın yerine geçmez.

## Bağlantı

Oyun, iki tarayıcı arasında şifreli mesajları halka açık MQTT sunucularından aktarır. Dört sunucuya bağlanma, sıra numaraları, alındı onayı ve yeniden gönderme desteği vardır. Bu sunucuların kullanılabilirliği dış hizmetlere bağlıdır; ücretli bir sunucu hesabı veya API anahtarı gerekmez.

## Yerel çalıştırma

Bu klasörü bir statik HTTP sunucusuyla açın. `localhost` üzerinde tarayıcı güvenli bağlam özelliklerini kullanabilir. Müzik dosyaları `music/` klasöründedir; parça ve kaynak bilgileri oyun içindeki katalogda bulunur.
