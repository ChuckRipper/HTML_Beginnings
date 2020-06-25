#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#Jest to program do obliczania pola i obwodu koła na podstawie podanego promienia

import math as mt

def kolo(r):
    pole = mt.pow(r, 2) * mt.pi
    obwod = 2 * r * mt.pi
    return pole, obwod

print("Program do obliczania pola i obwodu koła o danym promieniu")
promien = int(input("Wprowadź promień koła/okręgu: "))
wynik = kolo(promien)

print("Wprowadzone dane: \nPromień koła: ", promien, "\nPole koła wynosi: ", wynik[0], " natomiast obwód koła wynosi: ", wynik[1])