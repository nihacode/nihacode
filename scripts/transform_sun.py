import os
import sys

def transform_svg(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace green contribution colors with Solar Fire palette
    content = content.replace('--c1:#01311f', '--c1:#4a154b')
    content = content.replace('--c2:#034525', '--c2:#7c3aed')
    content = content.replace('--c3:#0f6d31', '--c3:#ff4500')
    content = content.replace('--c4:#00c647', '--c4:#ffd700')

    # Solar Sun head and glowing solar flare CSS
    sun_css = '''
.s0 { rx: 7.2px !important; ry: 7.2px !important; fill: #FFD700 !important; filter: drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 16px #FF4500) !important; }
.s1 { rx: 5px !important; ry: 5px !important; fill: #FF8C00 !important; filter: drop-shadow(0 0 6px #FF8C00) !important; }
.s2 { rx: 4px !important; ry: 4px !important; fill: #FF4500 !important; filter: drop-shadow(0 0 4px #FF4500) !important; }
.s3 { rx: 3px !important; ry: 3px !important; fill: #C084FC !important; }
'''
    if '</style>' in content:
        content = content.replace('</style>', sun_css + '</style>')

    # Inject Solar Banner header inside SVG
    sun_header = '<g transform="translate(440, -12)"><text text-anchor="middle" fill="#FFD700" font-family="monospace" font-weight="bold" font-size="13px" letter-spacing="1px">☀️ THE SUN DEVOURS YOUR COMMITS ☀️</text></g>'
    if '</svg>' in content and 'THE SUN DEVOURS YOUR COMMITS' not in content:
        content = content.replace('</svg>', sun_header + '</svg>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully transformed {filepath} into Glowing Solar Sun SVG!")

if __name__ == "__main__":
    targets = sys.argv[1:] if len(sys.argv) > 1 else ["dist/github-contribution-grid-snake-dark.svg", "dist/github-contribution-grid-snake.svg"]
    for target in targets:
        transform_svg(target)
