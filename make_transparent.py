import sys
import os
from PIL import Image

def make_transparent(input_path, output_path, threshold=230):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} does not exist.")
        return False
    
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        if a == 0:
            new_data.append(item)
        elif r >= threshold and g >= threshold and b >= threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python make_transparent.py <input_path> <output_path> [threshold]")
        sys.exit(1)
        
    threshold = int(sys.argv[3]) if len(sys.argv) > 3 else 230
    make_transparent(sys.argv[1], sys.argv[2], threshold)
