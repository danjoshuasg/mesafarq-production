import p1_img from './producto_1.png'
import p2_img from './producto_2.png'
import p3_img from './producto_3.png'
import p4_img from './producto_4.png'
import p5_img from './producto_5.png'
import p6_img from './producto_6.png'
import p7_img from './producto_7.png'
import p8_img from './producto_8.png'
import p9_img from './producto_9.png'
import p10_img from './producto_10.png'
import p11_img from './producto_11.png'
import p12_img from './producto_12.png'
import p13_img from './producto_13.png'
import p14_img from './producto_14.png'
import p15_img from './producto_15.png'
import p16_img from './producto_16.png'
import p17_img from './producto_17.png'
import p18_img from './producto_18.png'
import p19_img from './producto_19.png'
import p20_img from './producto_20.png'
import p21_img from './producto_21.png'
import p22_img from './producto_22.png'
import p23_img from './producto_23.png'
import p24_img from './producto_24.png'
import p25_img from './producto_25.png'
import p26_img from './producto_26.png'
import p27_img from './producto_27.png'

let data_product =[
    {
        id:1,
        name: "Esterilizador de vapor para uso dental",
        image: p1_img,
        specifications: "3L/5L/8L",
        price: 120.00,
        units: 10,
        type: "Esterilizacion"
    },

    {
        id:2,
        name: "Limpiador ultrasónico industrial",
        image: p2_img,
        specifications: "3L",
        price: 350.00,
        units: 10,
        type: "Esterilizacion"
    },

    {
        id:3,
        name: "Miniautoclave (Esterilizador de Vapor)",
        image: p3_img,
        specifications: "45L",
        price: 120.00,
        units: 10,
        type: "Esterilizacion"
    },

    
    {
        id:4,
        name: "Autoclave Dental (Esterilizador de Vapor)",
        image: p4_img,
        specifications: "24L",
        price: 120.00,
        units: 10,
        type: "Esterilizacion"
    },

    
    {
        id:5,
        name: "Rollos de esterilización de 200 m",
        image: p5_img,
        specifications: "Anchos 5cm, 7.5cm, 10cm, 15cm, 20cm, 30cm, 40cm y 50cm",
        price: 120.00,
        units: 10,
        type: "Esterilizacion"
    },

    {
        id:6,
        name: "Máquina de sellado para clínica dental",
        image: p6_img,
        specifications: "Sellado caliente",
        price: 400.00,
        units: 10,
        type: "Dental"
    },

    {
        id:7,
        name: "Sistema de lubricación de pieza de mano Dental",
        image: p7_img,
        specifications: "Dispositivo lubricante",
        price: 560.00,
        units: 12,
        type: "Dental"
    },

    {
        id:8,
        name: "Equipo de simulación para la formación dental",
        image: p8_img,
        specifications: "Mesa con cuatro simuladores",
        price: 5000.00,
        units: 1,
        type: "Dental"
    },

    {
        id:9,
        name: "Sillón odontológico",
        image: p9_img,
        specifications: "Unidad dental",
        price: 6450.00,
        units: 12,
        type: "Dental"
    },

    {
        id:10,
        name: "Nuevo equipo dental",
        specifications: "Dispositivo lubricante",
        image: p10_img,
        price: 560.00,
        units: 12,
        type: "Dental"
    },

    {
        id:11,
        name: "Limpiador ultrasónico para joyería",
        specifications: "Mini",
        image: p11_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:12,
        name: "Cabeza para simulador dental",
        specifications: "Repuesto",
        image: p12_img,
        price: 0.99,
        units: 12,
        type: "Dental"
    },

    {
        id:13,
        name: "Extractor de polvo al vacío para laboratorio Dental",
        specifications: "Modelo YSDEN-JT26",
        image: p13_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:14,
        name: "Pulidora para laboratorio dental",
        specifications: "Modelo YSDEN-JT60, 3000 RPM",
        image: p14_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:15,
        name: "Válvula de succión para unidad dental",
        specifications: "N/A",
        image: p15_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:16,
        name: "Soporte de piezas de repuesto de plástico dental",
        specifications: "N/A",
        image: p16_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:17,
        name: "Escaner digital 3D para dentistas",
        specifications: "Dispositivo Intraoral",
        price: 0.99,
        image: p17_img,
        units: 1,
        type: "Dental"
    },

    {
        id:18,
        name: "Rayos X Digital Intraoral Clínica",
        specifications: "Sensor Rayos X",
        image: p18_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:19,
        name: "Escalador ultrasónico eléctrico para oficina dental",
        specifications: "Sensor Rayos X",
        image: p19_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:20,
        name: "Unidad de curado de luz UV para instrumentos dentales",
        specifications: "Esterilizador",
        image: p20_img,
        price: 0.99,
        units: 1,
        type: "Dental"
    },

    {
        id:21,
        name: "Monitor portátil, medidor de Spo2, capnógrafo, Etco2",
        specifications: "Esterilizador",
        image: p21_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:22,
        name: "Doppler-máquina y Monitor portátil de anestesia veterinaria",
        specifications: "Esterilizador",
        image: p22_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:23,
        name: "Bomba de infusión volumétrica portátil para animales",
        image: p23_img,
        specifications: "Quimio IV",
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:24,
        name: "Bomba de infusión volumétrica portátil para animales",
        specifications: "Quimio IV",
        image: p24_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:25,
        name: "Equipo veterinario portátil ",
        specifications: "Quimio IV",
        image: p25_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:26,
        name: "Manta de calor automática para uso quirúrgico",
        specifications: "Regulador de temperatura",
        image: p26_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

    {
        id:27,
        name: "Kit de endoscopio de oído con fibra óptica",
        specifications: "Regulador de temperatura",
        image: p27_img,
        price: 0.99,
        units: 1,
        type: "Veterinario"
    },

]

export default data_product;