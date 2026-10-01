import os
from PIL import Image

def compress_to_webp(input_path, output_path, target_kb=50):
    target_bytes = target_kb * 1024
    
    try:
        img = Image.open(input_path)
    except FileNotFoundError:
        print(f"Error: Gambar {input_path} tidak ditemukan.")
        return

    # Pastikan mode warna kompatibel dengan WebP (RGB atau RGBA untuk transparansi)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")

    # Pencarian biner (Binary Search) untuk menemukan kualitas (quality) tertinggi 
    # yang menghasilkan ukuran file di bawah target
    low, high = 1, 100
    best_quality = 1
    
    while low <= high:
        mid = (low + high) // 2
        img.save(output_path, format="WEBP", quality=mid)
        
        if os.path.getsize(output_path) <= target_bytes:
            best_quality = mid
            low = mid + 1  # Coba kualitas yang lebih bagus
        else:
            high = mid - 1 # Ukuran masih terlalu besar, turunkan kualitas

    # Simpan dengan kualitas optimal yang ditemukan
    img.save(output_path, format="WEBP", quality=best_quality)
    
    # Fallback: Jika di quality 1 (terburuk) ukuran masih > 50KB,
    # perkecil resolusi gambar (resize) sebesar 10% secara iteratif
    while os.path.getsize(output_path) > target_bytes:
        width, height = img.size
        # Hentikan jika gambar sudah terlalu kecil (mencegah error)
        if width <= 20 or height <= 20:
            print("Peringatan: Gambar tidak bisa dikompres lebih kecil lagi tanpa merusak wujudnya.")
            break
            
        img = img.resize((int(width * 0.9), int(height * 0.9)), Image.Resampling.LANCZOS)
        img.save(output_path, format="WEBP", quality=best_quality)
        
    final_size_kb = os.path.getsize(output_path) / 1024
    print(f"Sukses! Gambar tersimpan di: {output_path}")
    print(f"Resolusi Akhir : {img.size[0]}x{img.size[1]}")
    print(f"Ukuran Akhir   : {final_size_kb:.2f} KB (Quality: {best_quality})")

# === Cara Penggunaan ===
# Ganti nama file sesuai dengan file yang Anda miliki
input_gambar = "tim-wisata-banyuwangi.jpg"
 
output_gambar = "tim-wisata-banyuwangi.webp"

compress_to_webp(input_gambar, output_gambar, target_kb=50)