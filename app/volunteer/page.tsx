"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Award, Zap, MapPin, Mail, Phone } from "lucide-react"

// --- Constants for Form Data ---

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT",
];

const INTEREST_OPTIONS = [
  "Media and Publicity",
  "Campaign Funding",
  "Grass Root Mobilization",
  "Logistics and Operations",
  "Data Entry and Analysis",
];

const volunteerStats = [
  { icon: Users, number: "5K+", label: "Active Volunteers" },
  { icon: TrendingUp, number: "1M+", label: "Voters Mobilized" },
  { icon: Award, number: "75%", label: "Success Rate" },
]

// --- EMBEDDED NIGERIAN STATES AND LGA DATA (REPLACES UNSTABLE API) ---
// This data is now local and reliable.
const NIGERIA_LGA_DATA: { [key: string]: string[] } = {
    "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", " "],
    "Adamawa": ["Demsa", "Fufore", "Ganye", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
    "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit-Eket", "Essien Udim", "Etim-Ekpo", "Etinan", "Ibeno", "Ibesikpo-Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot-Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Ukanafun", "Udung-Uko", "Uruan", "Urue-Offong/Oruko", "Uyo"],
    "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
    "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
    "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", "Ukum", "Vandeikya"],
    "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", " "],
    "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
    "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Warri North", "Warri South", "Warri South West"],
    "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
    "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
    "Ekiti": ["Ado-Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido-Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
    "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo-Uwani"],
    "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
    "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Unuimo"],
    "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Kudai", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
    "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sanga", "Sabon Gari", "Soba", "Zangon Kataf", "Zaria"],
    "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kirikasamma", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nassarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
    "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dan Musa", "Dandume", "Danja", "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
    "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"],
    "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
    "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
    "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
    "Nasarawa": ["Awe", "Doma", "Karima", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
    "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Muya", "Pailoro", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
    "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
    "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-West", "Akoko South-East", "Ile Oluji/Okeigbo", "Ilaje", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
    "Osun": ["Aiyedaade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
    "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"],
    "Plateau": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
    "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
    "Sokoto": ["Binji", "Bodinga", "Dange/Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
    "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kauru", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
    "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
    "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"],
    "FCT": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]
};


// --- Volunteer Page Component ---

export default function VolunteerPage() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNo, setPhoneNo] = useState<string>("")
  const [town, setTown] = useState<string>("")
  const [lga, setLga] = useState<string>("") // Selected LGA
  const [stateOfOrigin, setStateOfOrigin] = useState<string>("")
  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  // State for LGAs is kept, but loading state is removed as lookup is synchronous
  const [lgas, setLgas] = useState<string[]>([])


  // Effect to perform LOCAL LGA lookup when stateOfOrigin changes
  useEffect(() => {
    const loadLgas = (state: string) => {
        if (!state) {
            setLgas([]);
            setLga("");
            setErrorMessage(null);
            return;
        }

        // --- LOCAL DATA LOOKUP ---
        const foundLgas = NIGERIA_LGA_DATA[state];
        
        if (foundLgas && foundLgas.length > 0) {
            // Success: Set LGAs from local data
            setLgas(foundLgas.sort());
            setErrorMessage(null);
        } else {
            // Data mismatch error (highly unlikely with this complete list)
            setLgas([]);
            setLga("");
            setErrorMessage(`Data mismatch: Could not find LGAs for the selected state.`);
        }
    };

    if (stateOfOrigin) {
        loadLgas(stateOfOrigin);
    } else {
        setLgas([]);
        setLga("");
        setErrorMessage(null);
    }
  }, [stateOfOrigin]); // Dependency array: run when stateOfOrigin changes


  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    )
  }

  const handleStateChange = (state: string) => {
    setStateOfOrigin(state);
    setLga(""); // Clear LGA selection when state changes
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!fullName || !phoneNo || !town || !lga || !stateOfOrigin || interests.length === 0) {
      setErrorMessage("Please fill out all required fields (Full Name, Phone No, Location, and select at least one Interest).")
      return
    }

    // In a real app, this would send data to a backend (e.g., Firestore)
    console.log({
      fullName,
      email: email || "Not Provided",
      phoneNo,
      town,
      lga,
      stateOfOrigin,
      interests,
    })
    
    // Reset form fields
    setFullName("")
    setEmail("")
    setPhoneNo("")
    setTown("")
    setLga("")
    setStateOfOrigin("")
    setInterests([])

    // Show success message
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const isFormValid = fullName && phoneNo && town && lga && stateOfOrigin && interests.length > 0;

  return (
    <main className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section - Adapted for Volunteering */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-red-600 font-semibold text-lg">Join Our Movement</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Become a Volunteer</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lend your skill, time, and passion. Together, we can mobilize our communities and achieve our goals.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-gray-200 shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="pt-6 space-y-3 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-red-600">{stat.number}</p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gray-200 shadow-2xl rounded-xl">
            <CardHeader className="bg-gray-50/50 border-b">
              <CardTitle className="text-gray-900">Volunteer Application</CardTitle>
              <CardDescription>Fill out the form below to register your interest in volunteering.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6 sm:p-8">
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-500" />
                    Personal Details
                  </h3>
                  <input
                    type="text"
                    placeholder="Full Name (Required)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (Required)"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Location Information */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    Location Details
                  </h3>
                  
                  {/* State of Origin Selector */}
                  <select
                    value={stateOfOrigin}
                    onChange={(e) => handleStateChange(e.target.value)} // Use new handler
                    required
                    // Dynamic class change: use green ring/border if state is selected
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 bg-white appearance-none transition-all ${
                        stateOfOrigin
                            ? "border-green-500 ring-green-500 border-2" 
                            : "border-gray-300 focus:ring-red-500 border"
                    }`}
                  >
                    <option value="" disabled>Select State of Origin (Required)</option>
                    {NIGERIAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Town / City (Required)"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {/* LGA SELECTOR: Dynamic based on stateOfOrigin */}
                    <select
                        value={lga}
                        onChange={(e) => setLga(e.target.value)}
                        required
                        // The select is now only disabled if no state is selected or if the LGA list is empty
                        disabled={!stateOfOrigin || lgas.length === 0}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white appearance-none"
                    >
                        <option value="" disabled>
                            {stateOfOrigin && lgas.length > 0
                                ? "Select Local Government Area (Required)"
                                : "Select State first"
                            }
                        </option>
                        {lgas.map(lgaOption => (
                        <option key={lgaOption} value={lgaOption}>{lgaOption}</option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    Areas of Interest (Select all that apply)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTEREST_OPTIONS.map((interest) => (
                      <label 
                        key={interest} 
                        className={`flex items-center gap-3 cursor-pointer p-4 border-2 rounded-xl transition-all shadow-sm ${
                          interests.includes(interest) 
                            ? "border-red-600 bg-red-50 text-red-700 ring-2 ring-red-500" 
                            : "border-gray-200 text-gray-800 hover:border-red-400"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-red-600 rounded"
                        />
                        <span className="font-medium text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                {errorMessage && (
                  <p className="text-center text-sm text-red-600 font-medium">⚠️ {errorMessage}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 rounded-xl shadow-lg transition-colors"
                  disabled={!isFormValid}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Sign Up to Volunteer
                </Button>
                
                {submitted && (
                  <p className="text-center text-sm text-green-600 font-medium animate-pulse">Thank you! We've received your application and will be in touch soon.</p>
                )}
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your contact information will only be used for campaign-related coordination.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section - Adapted */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Have Questions? Get in Touch!</h2>
          <p className="text-xl text-gray-600">
            If you need more information about specific volunteer roles or commitments, please contact our team.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-red-600 hover:bg-red-700 rounded-lg">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
            <Button variant="outline" className="border-red-500 text-red-600 bg-transparent hover:bg-red-100 transition-colors rounded-lg">
              <Phone className="w-4 h-4 mr-2" />
              Call Coordinator
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
