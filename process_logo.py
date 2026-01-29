from PIL import Image
import numpy as np

def remove_white_background(input_path, output_path, color_mode='dark'):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check if pixel is white (or close to white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            if color_mode == 'light':
                # Convert non-white pixels to Off-White/Bege (#F5F3F0) for dark background
                new_data.append((245, 243, 240, 255))
            else:
                # Keep original dark color (or ensure it's dark green/black)
                # Let's enforce the dark green color #2D5016 just to be sure, or keep original
                # Using original is safer if it has details, but let's make it dark green #1a2e10
                new_data.append((26, 46, 16, 255)) 

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

# Input file
input_file = "/home/ubuntu/dra-fernanda-melo/client/public/images/logo-dandelion.png"

# Create Dark Version (for Beige Background)
remove_white_background(input_file, "/home/ubuntu/dra-fernanda-melo/client/public/images/logo-dark.png", color_mode='dark')

# Create Light Version (for Green Background)
remove_white_background(input_file, "/home/ubuntu/dra-fernanda-melo/client/public/images/logo-light.png", color_mode='light')
