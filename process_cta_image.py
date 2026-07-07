import sys
from PIL import Image

def process_cta_image(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        
        # 1. Detect white/light background -> make transparent
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((0, 0, 0, 0))
        # 2. Detect orange accent pop -> keep it orange (e.g. high red, medium/low blue)
        elif r > 180 and r - b > 80:
            new_data.append((r, g, b, a))
        # 3. Detect navy outline lines -> convert to white for dark backgrounds
        else:
            # Scale brightness slightly for smooth outlines
            new_data.append((255, 255, 255, a))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved processed transparent white-line CTA image to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_cta_image.py <input_path> <output_path> [threshold]")
    else:
        thresh = int(sys.argv[3]) if len(sys.argv) > 3 else 240
        process_cta_image(sys.argv[1], sys.argv[2], thresh)
