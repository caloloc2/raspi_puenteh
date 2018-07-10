#!/usr/bin/python
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setup(22, GPIO.OUT) ## GPIO 2 como salidagit 
GPIO.setup(23, GPIO.OUT) ## GPIO 2 como salidagit 
GPIO.setup(4, GPIO.OUT) ## GPIO 2 como salidagit 
GPIO.setup(17, GPIO.OUT) ## GPIO 2 como salidagit 
GPIO.setup(27, GPIO.OUT) ## GPIO 2 como salidagit 

def lectura():
	try:
		archivo = open("php/valores.ph", "r") 
		linea1 = archivo.readline()
		bina = bin(int(linea1))
		binario = bina[2:len(bina)]
		binario_completo = binario.zfill(4)

		bits = list(binario_completo)
		#print (bits)
	except:
		print "error"
		bits = ['0', '0', '0', '0']

	x=4
	for bit in bits:
		if (x==4):
			# led 4
			if (bit=='1'):
				print ("on")
				GPIO.output(17, True) ## Enciendo el 17
			else:
				print ("off")
				GPIO.output(17, False) ## Enciendo el 17
		if (x==3):
			# led 3
			if (bit=='1'):
				print ("on")
				GPIO.output(4, True) ## Enciendo el 4
			else:
				print ("off")
				GPIO.output(4, False) ## Enciendo el 4
		if (x==2):
			# led 2
			if (bit=='1'):
				print ("on")
				GPIO.output(23, True) ## Enciendo el 3
			else:
				print ("off")
				GPIO.output(23, False) ## Enciendo el 3
		if (x==1):
			# led 1
			if (bit=='1'):
				print ("on")
				print ("*******")
				GPIO.output(22, True) ## Enciendo el 2
			else:
				print ("off")
				print ("*******")
				GPIO.output(22, False) ## Enciendo el 2

		x=x-1

try:
	while(1):
		GPIO.output(27, True) ## Enciendo el 2
		lectura()
		GPIO.output(27, False) ## Enciendo el 2
		time.sleep(0.3)

except KeyboardInterrup:
	GPIO.output(22, False) ## Enciendo el 2
	GPIO.output(23, False) ## Enciendo el 2
	GPIO.output(4, False) ## Enciendo el 2
	GPIO.output(17, False) ## Enciendo el 2
	GPIO.output(27, False) ## Enciendo el 2
	GPIO.cleanup() ## Hago una limpieza de los GPIO