import { Component, Input, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { PagedataService } from 'src/app/services/pagedata.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  // @Input() vehicleImg:string = "src/assets/images/carImg.jpeg";
  Locations: any=[];
  evseList: any=[];
  iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  data:any=[
    {
        "charger_city": "nashik",
        "lat":"20.705350000000067",
        "log":"77.00218000000007",
        "charger_location": "(20.705350000000067, 77.00218000000007)",
        "created_at": "2022-10-06 13:37:43.429749",
        "location_description": "vidarbh",
        "unit_state": "",
        "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvsPHuo6F6abFuS0hxQaw\nBHVFEah7+vaFD28zxS6IC48OMHGW79eJVRBtDk1zNVy/eKybHNWdc4cKRz9Ijx1G\nz3fp7M/cZy6Fz3wslSOHOyw8lh8KGiEeXCqv8CJWjTXqF4GYBwoUY7SyY/s6ozLY\nPIR1BnTGXacmwMxHBn9nbu+l66+rZGn+PWZGPdvg3yHppSVTPVTByfbHyzfn2mQf\nyTaGgXG3jig2y0/RGhY6jk28WtZsTYSqeFPr1KaQng3n4DlJDy27z6yE2/hVpMmW\ndWF8hvum/VyIcMiSg0DsOu/AO1x6eXAfeJSWsJczyiBRkfoeeBAcqiNpmzm9ejYn\n5QIDAQAB\n-----END PUBLIC KEY-----\n",
        "certificate_id": "fb8ad39686da4ea228688cbdb60286a971a567284688a092f1bde9e09dfde6dd",
        "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDWjCCAkKgAwIBAgIVAMeIeyBgbHdPM7fQwFUlOC6gM7hrMA0GCSqGSIb3DQEB\nCwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t\nIEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMjEwMDYxMzM1\nNDNaFw00OTEyMzEyMzU5NTlaMB4xHDAaBgNVBAMME0FXUyBJb1QgQ2VydGlmaWNh\ndGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC+w8e6joXppsW5LSHF\nBrAEdUURqHv69oUPbzPFLogLjw4wcZbv14lVEG0OTXM1XL94rJsc1Z1zhwpHP0iP\nHUbPd+nsz9xnLoXPfCyVI4c7LDyWHwoaIR5cKq/wIlaNNeoXgZgHChRjtLJj+zqj\nMtg8hHUGdMZdpybAzEcGf2du76Xrr6tkaf49ZkY92+DfIemlJVM9VMHJ9sfLN+fa\nZB/JNoaBcbeOKDbLT9EaFjqOTbxa1mxNhKp4U+vUppCeDefgOUkPLbvPrITb+FWk\nyZZ1YXyG+6b9XIhwyJKDQOw678A7XHp5cB94lJawlzPKIFGR+h54EByqI2mbOb16\nNiflAgMBAAGjYDBeMB8GA1UdIwQYMBaAFNGpYJg3GPNO2Dd4WS1ej1bX2BmmMB0G\nA1UdDgQWBBTNqaIZExIggMDYBV+ElNo/QiEEHDAMBgNVHRMBAf8EAjAAMA4GA1Ud\nDwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEAtUw3F63Ceu2/44ph5iwWmtyY\naNwLvQUqkx525F3CtgDCT6UsJSoqSw3MH2gIIRawpojnwszGCYTV8bepMGpTT/NH\nr4KOvlmF8PDKJMJqLSkQsrKbBDYqU0rAhNLSnkxBU9jDlCr6XwZBPII37pZruElp\n5PHYdwLSk3NooxK5yMMhURITC4wK6E1d/rnyLmv97K/AqP2D+jp1RG1tPmiemekH\nyiOo9QgmSAGM8w+KkjJFVyqDuqHT/+hc15qgoOY2Lz7rK2Y5JOV1rMj95KRa9h8e\n/L8g6g6pZU/0A6WzWXOWdxfF3pUkoLidh4wkXCKqJKY+xPH/Jf0z3Ubs9AMO0A==\n-----END CERTIFICATE-----\n",
        "charger_nickname": "Charger-55",
        "postal_code": "422111",
        "charger_country": "canada",
        "updated_at": "2022-10-06 13:38:46.979319",
        "UserId": "8b57f5bd-8a58-4a8b-aebf-5bff746172ab",
        "certificate_arn": "arn:aws:iot:us-east-1:333982647306:cert/fb8ad39686da4ea228688cbdb60286a971a567284688a092f1bde9e09dfde6dd",
        "charger_state": "Alberta",
        "total_power": "0",
        "co2_offset": "0",
        "charger_number": "555-555",
        "charger_address": "akola",
        "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvsPHuo6F6abFuS0hxQawBHVFEah7+vaFD28zxS6IC48OMHGW\n79eJVRBtDk1zNVy/eKybHNWdc4cKRz9Ijx1Gz3fp7M/cZy6Fz3wslSOHOyw8lh8K\nGiEeXCqv8CJWjTXqF4GYBwoUY7SyY/s6ozLYPIR1BnTGXacmwMxHBn9nbu+l66+r\nZGn+PWZGPdvg3yHppSVTPVTByfbHyzfn2mQfyTaGgXG3jig2y0/RGhY6jk28WtZs\nTYSqeFPr1KaQng3n4DlJDy27z6yE2/hVpMmWdWF8hvum/VyIcMiSg0DsOu/AO1x6\neXAfeJSWsJczyiBRkfoeeBAcqiNpmzm9ejYn5QIDAQABAoIBAQCJOH9lPLwrFGHK\nECLofSUEL+7dAtsb7VRNg+ozfoMx/VdxlWPDZsFMxSINVbz3t52rik2Rcj9uKMdF\n9MmW2LJk7pcAV4ztU9PBKktPhFz0PZ/fRLiZjxUtqy8fhzPHI+8dtYTMG34LMqHX\ntZG6bwqIjac4W6uNFn2T1d2JWP/oFY8DL63SPkQCjs7q71fiQQrzHV029pUNiuuv\nd47Fr5ikik5npBqFMS4ZuDd7f1L29HgrsVrPHDkQPmcHMJW4nvcAGGJ6DugukXS9\nCy4bc1Crkd/4IJXLvNzdSloJjDz1gse94VTQqJcHIwKL/SF40pOT3VRM6+dAtXhn\nTGsamshBAoGBAPXSqhL2saAtVLm5TCKOYO2QJB2MlEtZyMuqlxtP08dBEVRRVJ0x\ncRgATUMkcabJVboLMcc6qj2D7BR+lm7Vd+qKl6Cn8wS/ztCPZcpOmGAtt8FgckNl\nRwGnzdT4HIJFDKvgLefKbwVLGDiNQkAPVaZQ6h30n+ghcskDf0HPY2VpAoGBAMap\nlhUDZz8oyIYRYZovCXECM/XhpfOLCd20SOxFEEYAptCJ6z16neI04R5SqUnOSll6\nof33gAe6v59DmgxhltPy9uPrBId70EMrlq/WH/FUq9n2bmDuchQ5eBPl+Dq6bPCT\nvTnSEPMqysjRecizDDNsrLCeuDNV/6fEezpCCfMdAoGAGkwuG5c+i1cuICw9g9jd\nb6yi4HJgjusM+xTF04snqcJBO1b0CVj3s0yc91jXu7MAM8XszlZtTeVmBQ9Bwpud\nl366F9q/ubtXQaKFji34SRm69bn+n00fWoL8FxNv4VPHtj9mScyzMcrFzY73DmlV\njVRMp2W7EZc6c1ynaX/pLzkCgYATGzZK+RPR+Dso4b0QVhvDWaHjsPsD7EhboT4u\nMwo4oVFp1wnf1M4gdlN8Vhjf904hQvEXetk+ZRCO4bKMJEqcQc7K5sx9t0O1YhjQ\n+ngB/tG0WcYN3oDsPwa0azavd0SI8ryNNg3ZRTFRlQvwaH/w5i/JoMo4bbnzyarM\nVJOeZQKBgQC4EM+tXHMS23tSin9qms4rr0WwQCsKd/F72bY7ojQ6uMeKP5S9siJ6\nXYdTNrYuDqjpKXVFFN8vycWGzM1krpdckFKXiRgqSkNI3LVnC+zBBA0NTnaapXv/\nDyhrXMb+OylcUjjHH235Kz/sb56xFlhsmQpYKMaW4+IaMhEOYXBN2g==\n-----END RSA PRIVATE KEY-----\n",
        "station_type": "private station"
    },
    {
        "charger_city": "dadar",
        "lat":"18.940170000000023",
        "log":"72.83489000000003  ",
        "charger_location": "(18.940170000000023, 72.83489000000003)",
        "created_at": "2022-10-06 09:52:41.907482",
        "location_description": "good place",
        "unit_state": "",
        "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApYmiJ1Xs0IYTIEZZFFvm\n3UtVVUMG3kieWYLougFvy3Sv5PQ4oQgQros7i/ZRmxEph/oiW0SSud+6V+CxU4dY\nxIky29ViiVe7ykW9sdqJHR/xVyzBoTsPI7l6l3PcHlPG/Gb4GrnbPJXpQuqP3AAH\nAvglFNOigWryaHHytBdMngHn27tZWsJjPw4RN6XQu9GtgprLrKTmnFCo3KgLryfG\n7ZiPOdTxPtod5MUUuFMaVovShQ0YyElsU09ju1hyI8XgrMtTC2LmkK7+alBraQ2S\nwhumpzSrgHQFX6lHB7/OulID+k3UO3IHzs/fRDkVFPhim25bQ3xbsguFYE1eLZx5\n+wIDAQAB\n-----END PUBLIC KEY-----\n",
        "certificate_id": "056225c7a886c3bd856f53f60ab99481e2e7058052f74cc5144ed8ea22e1b3d6",
        "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDWTCCAkGgAwIBAgIUTJuyp4eJMHxEHSFErz6CuKqIyMwwDQYJKoZIhvcNAQEL\nBQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g\nSW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIyMTAwNjA5NTA0\nMloXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQVdTIElvVCBDZXJ0aWZpY2F0\nZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKWJoidV7NCGEyBGWRRb\n5t1LVVVDBt5InlmC6LoBb8t0r+T0OKEIEK6LO4v2UZsRKYf6IltEkrnfulfgsVOH\nWMSJMtvVYolXu8pFvbHaiR0f8VcswaE7DyO5epdz3B5Txvxm+Bq52zyV6ULqj9wA\nBwL4JRTTooFq8mhx8rQXTJ4B59u7WVrCYz8OETel0LvRrYKay6yk5pxQqNyoC68n\nxu2YjznU8T7aHeTFFLhTGlaL0oUNGMhJbFNPY7tYciPF4KzLUwti5pCu/mpQa2kN\nksIbpqc0q4B0BV+pRwe/zrpSA/pN1DtyB87P30Q5FRT4YptuW0N8W7ILhWBNXi2c\nefsCAwEAAaNgMF4wHwYDVR0jBBgwFoAUNejKePZ95Y8TkzMFFUTGWjF5i4AwHQYD\nVR0OBBYEFGN0dZ1GL4seURDH/+ybeSQUfII5MAwGA1UdEwEB/wQCMAAwDgYDVR0P\nAQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4IBAQCg4ouZf94As4QmswuCgLUyvcV0\n2jMcC/GBE3Yi+pW+4Yva4NEpsZhtN6q+V2pZ0zpYiJdRqH1aazP54fzR32jaG6RC\nN/dTiKzNbb8HU6/JkCzDxMif2+9i2LRLdlk5C0e0sGHf5LYP9Iz87Les9O3F6owu\nn5Q7Cmb7xC8vzYK/Fkg8P7ui5uiP484sWR+eIXgxXxVX7se4rIAl2qpTnKe0QCDF\ntVRq0ILuc0tk6dVB424Hc9R7RyIHkIOgSuTsZ2Hjcpgjxijlp8EVsiycc6xxLFVX\nKJv8fVlXots9gKSJRX8SLbcfC8EtU8gXoc3o7vo43JNjdB6RY5XJgHzgDY/m\n-----END CERTIFICATE-----\n",
        "charger_nickname": "charger-100",
        "postal_code": "123456",
        "charger_country": "united states",
        "updated_at": "2022-10-06 13:46:47.843526",
        "UserId": "8b57f5bd-8a58-4a8b-aebf-5bff746172ab",
        "certificate_arn": "arn:aws:iot:us-east-1:333982647306:cert/056225c7a886c3bd856f53f60ab99481e2e7058052f74cc5144ed8ea22e1b3d6",
        "charger_state": "ABC",
        "total_power": "0",
        "co2_offset": "0",
        "charger_number": "ASC-HH1",
        "charger_address": "mumbai",
        "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEApYmiJ1Xs0IYTIEZZFFvm3UtVVUMG3kieWYLougFvy3Sv5PQ4\noQgQros7i/ZRmxEph/oiW0SSud+6V+CxU4dYxIky29ViiVe7ykW9sdqJHR/xVyzB\noTsPI7l6l3PcHlPG/Gb4GrnbPJXpQuqP3AAHAvglFNOigWryaHHytBdMngHn27tZ\nWsJjPw4RN6XQu9GtgprLrKTmnFCo3KgLryfG7ZiPOdTxPtod5MUUuFMaVovShQ0Y\nyElsU09ju1hyI8XgrMtTC2LmkK7+alBraQ2SwhumpzSrgHQFX6lHB7/OulID+k3U\nO3IHzs/fRDkVFPhim25bQ3xbsguFYE1eLZx5+wIDAQABAoIBABepjNxClA9amvFK\nHQGkAWQwmIoPgrPTfY8d/1ZXTjuu+lWn81BRbtEEZgajtxaLZXxibPbO3opjSKe3\nHqHp/u5ZDkQORH+NYvKO9YauzlqzbjQf2a3KW2en47YygYx0PUVnEp//YS9P3oAK\nN3YjKt1pyyMm/VuyheQYJbFIg1Myh42Ou35W5YsVADbJ2Tlsg/hq28j5ow8GFpr2\nSDxeV2hjcFhavmbaVwGO0aO0YTRh9WSl+cW+DANMRU/wuB9nQime+2Er3tfJYmfh\nDar47jUdnQyvNoaPX/iKwYMfYDb1W1PsEIRi+NXWnGh1WlSWgaZyqZRCB0g3PNpO\n1ovN7MECgYEA3DWiKNBzIusFx2bKibGZPnWRxzP/Sl2rakF8brgJccU5VpQlNedF\nUBrpq64TYQOvH+ewX5WgtYdHfHeWyyVF+VABNXTcmfrjqM0Cu353zk2uSTxnKtbJ\nCfY01qJAsXmMVnKGyyHuXNs5lz2onBilCbdmsAMgtRGiEQ/XQjF9Xq0CgYEAwHE9\nc4RXc94g5uXJkbelKE2PIhkukpuGs/l6qjp9w8/5G3exS83VIrlNOOAcLIOG85T2\ndDtonIa4v1yDkEEx0JowgpWrrqTfYyJYr159d/4NHUy8XN7ZXnKP7bjD4yWC7/Ry\nT0Nkszyevvp+CFhXHKLDra+JBsGungcfu4CzGEcCgYBYdRr8ti9p+WrK3NnDUhoy\n4tt6X8LPRq1S85deioMQtp7/zmbcLljDguwW0MhsEiTI9jL9UofKI9ttfkSOuhxP\nt/mkVZtAJ25IIoJUesr5jm7ScHco2DrNy58SEP9Xy3G6UCshcjHkDxQlUtlmSugQ\n7SFM1xTOZ5TosapQpryryQKBgGCqgUu9dpBlS/GwC4h+zx9nljZyn8pVBVzyPIO1\nzebGWUNK5GxHgIBoxDmFmaFikC9a7FGGZg36PmMhfZTAqt02FpgBxrN7bhrF7fZp\naG0V2FCXcybTaizfLx0iaoN3HEaca68VE0hVcwhLm3NlrJxdxh1Ax3v1XllTCsWM\n6GmRAoGAZbvZ+2XhyRXbObU7yOSBV3YFKV1xWBU0bioeia8NC29nW+fepN4awBDh\nvFrHRxPk3yLn1LLGFdhzaqsjYu/Sy+/fG6KGG6v7LepfMw9rGhirMyZdeHB2KwaB\nbbnBGA/DNqXCRRJQG9iIKRkMxSFj48coRnXAXbqOIp1R2Ri7hWA=\n-----END RSA PRIVATE KEY-----\n",
        "station_type": "share station"
    },
    {
        "charger_location": "(18.504210000000057, 73.85286000000008)",
        "created_at": "2022-09-21 14:26:08.934433",
        "unit_state": "not charging\n",
        "lat":"20.705350000000067",
        "log":"77.00218000000007",
        "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4OS4xKTl6LKsow+NHUda\n+0MTjJjc1+T0eh/QDkOsoT2jdr3B/bZpX/r9QAoO1vPgj1ePgTZsNSscZNjIUl8u\nEdzqfpEUVQ1LUXQcXqltJD7zGTJCGv1S2zcu3yH4u9KDv9Tu0qTkauF1xKYq2kbY\n1TXKv7a649o8xwhnnlSli5GWa1r4yInXDo5dhQW40h28hpSNvza4ohfsBiL1agyu\n37wMqazCt/hYQMeCRHMr4tJGVfsoDx5XceS4JjOGEnW+VULvS2U5aT4DSWBW4iwU\nlAv89BxyrP061pE8QubOD/yVQG93UbnJ8NCysDudU6Zl3nPaoWT6IoUUoVRT4N/P\nUQIDAQAB\n-----END PUBLIC KEY-----\n",
        "certificate_id": "9dea49cc96f59dd6ecccd32d3c948596e317172bd2e1c2b05c974edb62a0eb9c",
        "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDWjCCAkKgAwIBAgIVALvAyY+INvEKl+vH7LbBNgRjB0fHMA0GCSqGSIb3DQEB\nCwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t\nIEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMjA5MjExNDI0\nMDlaFw00OTEyMzEyMzU5NTlaMB4xHDAaBgNVBAMME0FXUyBJb1QgQ2VydGlmaWNh\ndGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDg5LjEpOXosqyjD40d\nR1r7QxOMmNzX5PR6H9AOQ6yhPaN2vcH9tmlf+v1ACg7W8+CPV4+BNmw1Kxxk2MhS\nXy4R3Op+kRRVDUtRdBxeqW0kPvMZMkIa/VLbNy7fIfi70oO/1O7SpORq4XXEpira\nRtjVNcq/trrj2jzHCGeeVKWLkZZrWvjIidcOjl2FBbjSHbyGlI2/NriiF+wGIvVq\nDK7fvAyprMK3+FhAx4JEcyvi0kZV+ygPHldx5LgmM4YSdb5VQu9LZTlpPgNJYFbi\nLBSUC/z0HHKs/TrWkTxC5s4P/JVAb3dRucnw0LKwO51TpmXec9qhZPoihRShVFPg\n389RAgMBAAGjYDBeMB8GA1UdIwQYMBaAFNqR3kpbUaRGuhV+4luyxySZTU1qMB0G\nA1UdDgQWBBQWLIJIElKh1zVgxuvEicjL1vU4/jAMBgNVHRMBAf8EAjAAMA4GA1Ud\nDwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEAfq6yr7oPBcid7M+J3OpZkCV6\nCCVVtv656ATdf1MBsspcIKxEEkFaDkpncrdpnUkNO8FMpuUzPssje/5QNoHP1z//\nVCohuhZERPX61TLPS5Ai4Ma59rKya13CzZbKuEs37k2bO2bB+uXSMLEBEhFeTttR\nAzeIS+moFsnh7T7KB07Ws/KViUxeWBTsZ2dXHs8wDxxym3JqKJx3PMB+uBvwoYdy\nvLuDCxxqS6rsyKfC0ThWQp2EXghzXnldiF8nWXCK6W3bid8BOcbqW8XZkxBZemok\nNZVdkbaypMRbQ+kTMSkRQlRRN7+8S4BfeGdobMQXUcI5hGo5lMCGEHe3TPM+Uw==\n-----END CERTIFICATE-----\n",
        "charger_nickname": "Charger-2",
        "charger_country": "united states",
        "updated_at": "2022-10-06 09:10:09.498629",
        "UserId": "8b57f5bd-8a58-4a8b-aebf-5bff746172ab",
        "certificate_arn": "arn:aws:iot:us-east-1:333982647306:cert/9dea49cc96f59dd6ecccd32d3c948596e317172bd2e1c2b05c974edb62a0eb9c",
        "total_power": 0,
        "co2_offset": 0,
        "charger_number": "ASCH-2",
        "charger_address": "pune",
        "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA4OS4xKTl6LKsow+NHUda+0MTjJjc1+T0eh/QDkOsoT2jdr3B\n/bZpX/r9QAoO1vPgj1ePgTZsNSscZNjIUl8uEdzqfpEUVQ1LUXQcXqltJD7zGTJC\nGv1S2zcu3yH4u9KDv9Tu0qTkauF1xKYq2kbY1TXKv7a649o8xwhnnlSli5GWa1r4\nyInXDo5dhQW40h28hpSNvza4ohfsBiL1agyu37wMqazCt/hYQMeCRHMr4tJGVfso\nDx5XceS4JjOGEnW+VULvS2U5aT4DSWBW4iwUlAv89BxyrP061pE8QubOD/yVQG93\nUbnJ8NCysDudU6Zl3nPaoWT6IoUUoVRT4N/PUQIDAQABAoIBAHoCPGea2oxzGwvf\n7Pv8cVStoFZ/vBh4w1XaGoMSnf5gNWW/LxaZNvP2dByhGEnvx12c8GL2hqAVwnLH\n1W4y6wiP5LxDs1ctPjZzmsyUeHzYlgSOaqS/2IrLlmdBw/MKE6YoPGUVRkLiDIVi\nbQ88rniFlXiLBzuEc8K7QZP5clKT5fceP/7wxPwyaf0IN1QdBuR5kYbBL2PIzvjQ\naEIJCjbUPYQ1GFBCNqBqhy6/UtZxsQAdy09s61vFgjghaWyzUMVAAXX9FuhsJQIV\ny5RltPf+XcYOqgNI1McmxoHcrJrpS85a9TMq/syD6FkgvWfNW75xHCP+JntfY/Rc\n3kg38VECgYEA+3icv9QOMsB8Rh+NNFITLOzbbHVP9UvwYsUR6vViRFzIdGHifIvm\nAZ1BUmdD5RQAtXo/u396xE8vFlvx3/RnNowNCBdL2VIFLnfDLABgWeYONImkHjjS\ny8tjQiXG8cHxzwaPonoE9NDHAHocfaSLDkG7f8e4xHOAFRZ53GqCbr0CgYEA5PGT\nOPuBOPG/edj1h9EpkIhrAGkfiO3wRuwYZhpPMFe/YmQ9ll1NXaPTUUVCN0O3QOGA\nOpc56iazBo7omApWZ976ZXNIiW4ZIiHIChWIpKRrg6bartR36BILZbcBAw04XhJe\neF7jF+5qtEjn8gnhXO1kKOcBVU2EOqKv4Wso5iUCgYEAzYyEC+TIikF+E098+xRP\najxdCuVFK0scPY+6GqTi4uA4VbEhEQ7FPfKNT07rV1cnUS+Q4rDL56SV55/WMGo0\n54hIqqFoNUXuyFHKbbANEc6TM+yCAtYNr9ka1BnO6RPPlJpXU8aLQJVa5I/rs+OI\namneWg8lfyatvg72Iu3Imb0CgYEAlydbwSJkFbmeZo80xD/3RkKbCsFdHaWinuCf\n10GFiPBWHlr6Qn1FaA6SpTSp3BzsL3zykTxo80wrpKfTrxYcKCYSgcqUWJAFLgDJ\ntsay2ajohxoxhX4n0GOhfL1PgLlIvus3zhcvrgwuDOuZn7agQR9Goq6pta0hISlq\nH9UFQrUCgYEAgJWRFP9vCKVGTUk2uEz8Rkqgr1L2VMSG17mxrF/8U4EtxN8mvdZO\n2EM8y2BPScCmSDBqmRPd6Q/PEQVf8poAmWhIgMZINzs4/diBtGasbrSWh02x6U0t\n7P3weVlQ44YQlHXaZRaXrRi2ZiHn/VTSCpCvvPSq2dZQi1U1woeiCMI=\n-----END RSA PRIVATE KEY-----\n",
        "station_type": "private station"
    },
    {
        "charger_city": "nashik",
        "lat":"25.269510000000025",
        "log":"55.30884000000003",
        "charger_location": "(25.269510000000025, 55.30884000000003)",
        "created_at": "2022-10-05 18:21:53.927652",
        "location_description": "good place",
        "unit_state": "",
        "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvJNSG7bk5GjXUIc5veAc\nL8nZN4Gk5vy8MacTjCAW2Kfi24B5u6jAsRObrckIYAa3mYOLb0DIe7aldLpIF+hz\nis59I9T7fCk3uSisr0z3aUOVoh1mKH3UVPvR3hqrUrWPbt6WaoqL6K2/bQjW7W1j\nHrLey8ulICyXBN8dFqp+xNbH2RCVlvtDFmkhqyrb8iXvFbNP6tOlVBva3maqggHu\nIZTiqI6dfeKNw36/g7p3krqvqS2y1x08ZTu42iOzuLAs8p28sIUDTcHWxeCqBFhg\n1Sef4K5cEemQWP3BBAvUJeiNelJEG6ZxYElKQVHHepqkkBq2Xkg0OtVSef3+gNOe\nnwIDAQAB\n-----END PUBLIC KEY-----\n",
        "certificate_id": "69ec4ba6944d9b666dac7c0475765f92774ad90896c3512948317cbdc0750c8f",
        "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDWjCCAkKgAwIBAgIVANvmTHKsKnsYbe7Z/Mx4p/3Lcdc9MA0GCSqGSIb3DQEB\nCwUAME0xSzBJBgNVBAsMQkFtYXpvbiBXZWIgU2VydmljZXMgTz1BbWF6b24uY29t\nIEluYy4gTD1TZWF0dGxlIFNUPVdhc2hpbmd0b24gQz1VUzAeFw0yMjEwMDUxODE5\nNTRaFw00OTEyMzEyMzU5NTlaMB4xHDAaBgNVBAMME0FXUyBJb1QgQ2VydGlmaWNh\ndGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC8k1IbtuTkaNdQhzm9\n4Bwvydk3gaTm/LwxpxOMIBbYp+LbgHm7qMCxE5utyQhgBreZg4tvQMh7tqV0ukgX\n6HOKzn0j1Pt8KTe5KKyvTPdpQ5WiHWYofdRU+9HeGqtStY9u3pZqiovorb9tCNbt\nbWMest7Ly6UgLJcE3x0Wqn7E1sfZEJWW+0MWaSGrKtvyJe8Vs0/q06VUG9reZqqC\nAe4hlOKojp194o3Dfr+DuneSuq+pLbLXHTxlO7jaI7O4sCzynbywhQNNwdbF4KoE\nWGDVJ5/grlwR6ZBY/cEEC9Ql6I16UkQbpnFgSUpBUcd6mqSQGrZeSDQ61VJ5/f6A\n056fAgMBAAGjYDBeMB8GA1UdIwQYMBaAFKqpL7aacnEKF7jiMYD7rJT9QrsjMB0G\nA1UdDgQWBBTXBF/ib8jcZIdjFnLQfQ2ibLujlDAMBgNVHRMBAf8EAjAAMA4GA1Ud\nDwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEAmrW/4qD/2Bq/LCWico3WvLcd\nicigAfbCO/LderobmCSAJOSUdKo1IfEup6XC3AH4OvtbbWyxekcYh4eBDODmyLOx\n+zXI1A9nr/eP4gzpEzz6kXZ9nS04e/wJ3Gq63abHpM5q3tKQ+i/N3YwTmoQqjRTt\noUHi3GefgEvhUlyF1y+Fy+vlnyOtG1INO+Df5HCwenpsv1rWWQFU+uU9O/cz7OWV\nb6QBLLXTX1f85Bpz6VsI9KxX1tu4m8QaFBQIX8dKdR20E0/wc1QnN/Tm0IQu5LLA\nlwyGqPW0CnpIBoCMz4ruAdZ/ozYA0G/PyIit+0dde7QI7nmgY3Y+OruLY7cXIw==\n-----END CERTIFICATE-----\n",
        "charger_nickname": "Charger-5",
        "postal_code": "422111",
        "charger_country": "united states",
        "updated_at": "2022-10-06 13:34:40.521005",
        "UserId": "8b57f5bd-8a58-4a8b-aebf-5bff746172ab",
        "certificate_arn": "arn:aws:iot:us-east-1:333982647306:cert/69ec4ba6944d9b666dac7c0475765f92774ad90896c3512948317cbdc0750c8f",
        "charger_state": "ABC",
        "total_power": "0",
        "co2_offset": "0",
        "charger_number": "Abc-dds",
        "charger_address": "dubai",
        "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAvJNSG7bk5GjXUIc5veAcL8nZN4Gk5vy8MacTjCAW2Kfi24B5\nu6jAsRObrckIYAa3mYOLb0DIe7aldLpIF+hzis59I9T7fCk3uSisr0z3aUOVoh1m\nKH3UVPvR3hqrUrWPbt6WaoqL6K2/bQjW7W1jHrLey8ulICyXBN8dFqp+xNbH2RCV\nlvtDFmkhqyrb8iXvFbNP6tOlVBva3maqggHuIZTiqI6dfeKNw36/g7p3krqvqS2y\n1x08ZTu42iOzuLAs8p28sIUDTcHWxeCqBFhg1Sef4K5cEemQWP3BBAvUJeiNelJE\nG6ZxYElKQVHHepqkkBq2Xkg0OtVSef3+gNOenwIDAQABAoIBAQCnVac3tpz4Xlwq\nNkSzy+nXMitRiPZ2jnDFMrgy0MrVKG0zUJc1QfLzby3nEYwgAfXsAIG7kGYW+aVq\npl6Q8JGO69q58CXVMJIk+QX7bLXjL7jZKXNcnQPNAcRibZH3i+sie9xH4Hd0WrGS\nJJTsDPQ26oyvlR8LJOZByWZ7lYF2UoR7JvhigLonJ9hENcjnZRsmBo1zRbASBhy9\nn2JUv0ryaxPmEpuR6jSL5dzTB+i6VDULneYV8eJHJPgFNa/3DzxMoo+kA7jCIHhx\nInEIvmm5WbG7iAzbRJ5X/2Ii2F6fKzrpWyYaPh3+hQqDi6eCl6evoNefh2/NsBf/\nDl2/RRbxAoGBAPZEhh6k5YZJFUgTfZ04kTCSv0ugf3rSp1eQpslJGcUvJ5qqzwuc\nHs+/75dZsgNdNfqLKe3RLPJ4L8CfvlrmvYjTx57XJIwiSSI7/vMzOHiaB3K0eRrs\nV15mN5LddR9RoO6EpMTaLw5wnumalkSzg4c9oYvolplSEbNg/oLb3EuXAoGBAMQH\nIMvEKZZ4PsDrOz7DhVEsYTqgF8gqZlkkafcwFjzB49b0ipxRGgq/5xIvcb0DXuoX\nj8THAeH4z/J+8hDbWqRQkRUwE9zGEdutxH4is3lsk4SfVdLJV5ISnp+AgbhHLYMc\nH/GEeRtLdf0lLzWJ4j2UOD091y8Lt3pIZt6yMMY5AoGBAICo1iUmYx+gCPVJ8YN1\nLS1iTXy2UkOZ0IGH+gsJHOSOuTMt79OR8er5zLOW0dC+HthRYktzz/axYclR68JT\n8EuO0SikH9zygKDZFV57sRIY7rE3plmxhge0gW5CMtF09Q4H0Iljr9fscKl88Ord\nmmbKhR6yGhPp84NytiUptlLrAoGAQFXqkJXH5GeAiQZrAlVfOt3q5zfFtl8cCiOm\nV4dDtRsZcOH/YABKIL8M0m4Z0SP7Ea878yQxXP2xGfBJ9/hWDlmW1DJcQngLQmMM\ney1eY/qbi8pTe4OzJvDPeJ/PczCBImenoDePG8MvbS64CMVBKF6t+oOCTSF2TT7X\n7DzlPxkCgYEA4eydZhVNMfCy4ktR5anZxUvo5oop1K3ZzeyafKXCh8lCnogybhbZ\nuOi2xN6eS/M+X2fv1AoKN2JLmJrH8W3T4jS0FF40X4nfXbjjeZtvdfR9V2N8O8jO\niH4heFlodGilGAcva4SxnD9ROVTf8XqgAOzxb2WpMtqs6Se3uVOG4II=\n-----END RSA PRIVATE KEY-----\n",
        "station_type": "private station"
    }
  ]

  constructor(
    private pageService:PagedataService,
    private router: Router,
  ) { }

  ngOnInit(): void {    
    this.generateLocationList();
    this.pageService.changeTitle('Dashboard');
    this.pageService.sharedMessage.subscribe((res: any) => {
      console.log('PUSHER-DATA',res)
    })

  }
  generateLocationList() {
    this.data.forEach((element: any) => {
      this.evseList = [];
      // let latLong = element.charger_location.split(', ');
      let lat = element.lat
      let lng = element.log
      this.evseList.push(element.charger_nickname, lat, lng);
      this.Locations.push(this.evseList);
    });
    this.showMapLocation(this.Locations);
  }
showAssetDetails() {
  console.log('inside asset details');
  this.router.navigate(['/asset'])
}
  showMapLocation(data: any) {
    // Map Code
    let mapElement: HTMLElement = document.getElementById('map') as HTMLElement;
    let map: any;
    let LocationsForMap: any;
    LocationsForMap = this.Locations;

    map = new google.maps.Map(mapElement, {
      zoom: 3,
      center: new google.maps.LatLng(28.704, 77.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < LocationsForMap.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          LocationsForMap[i][1],
          LocationsForMap[i][2]
        ),
        icon: this.iconBase + "parking_lot_maps.png",
        label: "Test label",
        map: map,
      });
    }
  }
}
