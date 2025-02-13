# Example file showing a circle moving on screen
import pygame

# pygame setup
pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()
running = True
dt = 0

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
box_pos_x = 500
box_pos_y = 500

while running:
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last frame
    screen.fill("purple")

    player_pos_init_x = player_pos.x
    player_pos_init_y = player_pos.y

    pygame.draw.circle(screen, "red", player_pos, 40)
    pygame.draw.rect(screen, "orange", (200, 100, 400, 60))
    pygame.draw.rect(screen, "green", (box_pos_x, box_pos_y, 50, 50))

    keys = pygame.key.get_pressed()
    if keys[pygame.K_w]:
        player_pos.y -= 300 * dt
    if keys[pygame.K_s]:
        player_pos.y += 300 * dt
    if keys[pygame.K_a]:
        player_pos.x -= 300 * dt
    if keys[pygame.K_d]:
        player_pos.x += 300 * dt

    if player_pos.x >= 200 and player_pos.x <= 600 and player_pos.y >= 100 and player_pos.y <= 160:
        player_pos.x = player_pos_init_x
        player_pos.y = player_pos_init_y

    if player_pos.x <= box_pos_x + 50 and player_pos.x >= box_pos_x and player_pos.y >= box_pos_y and player_pos.y <= box_pos_y + 50:
        if player_pos.x >= box_pos_x:
            box_pos_x = player_pos.x - 50
        if player_pos.x <= box_pos_x:
            box_pos_x = player_pos.x + 50
        if player_pos.y >= box_pos_y:
            box_pos_y = player_pos.y - 50
        if player_pos.y <= box_pos_y:
            box_pos_y = player_pos.y + 50
        



    # flip() the display to put your work on screen
    pygame.display.flip()

    # limits FPS to 60
    # dt is delta time in seconds since last frame, used for framerate-
    # independent physics.
    dt = clock.tick(60) / 1000

pygame.quit()