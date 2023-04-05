//mengambil argument dari command line
const yargs = require('yargs')
const {simpanContact, listContact, detailContact, deleteContact} = require('./contacts')

yargs.command({
    command:'add',
    describe:'Menambahkan contact baru',
    builder:{
        nama:{
            describe:'Nama Lengkap',
            demandOption:true,
            type:'string'
        },
        email:{
            describe:'Email',
            demandOption:false,
            type:'string'
        },
        noHP:{
            describe:'Nomor Hp',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        const contact = {
            nama:argv.nama,
            email:argv.email,
            noHP:argv.noHP
        }
        simpanContact(argv.nama, argv.email, argv.noHP)
        console.log(contact)
    }
}).demandCommand()

//menampilkan daftar nama kontak
yargs.command({
    command:'list',
    describe:'Menampilkan semua nama dan no contact',
    handler(){
        listContact()
    }
})

//menampilkan detail sebuah contact berdasarkan nama
yargs.command({
    command:'detail',
    describe:'Menampilkan detail sebuah contact berdasarkan nama',
    builder:{
        nama:{
            describe:'Nama Lengkap',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        detailContact(argv.nama)
    }
})

//menghapus detail sebuah contact berdasarkan nama
yargs.command({
    command:'delete',
    describe:'Menghapus detail sebuah contact berdasarkan nama',
    builder:{
        nama:{
            describe:'Nama Lengkap',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       deleteContact(argv.nama)
    }
})

yargs.parse()



