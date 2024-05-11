import os
import shutil

def saveFile(fileToCopyPath, dest_dir):
    file_name = os.path.basename(fileToCopyPath)

    # Construct the destination file path
    dest_file = os.path.join(dest_dir, file_name)

    try:
        # Copy the file to the destination directory
        shutil.copy2(fileToCopyPath, dest_dir)
        print(f"{fileToCopyPath} copied to {dest_file}")
    except Exception as e:
        print(f"Error: Failed to copy {fileToCopyPath} to {dest_dir}. Reason: {e}")
        
    