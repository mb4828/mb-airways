var DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International Airport (EWR)',
		city: 'Newark, USA - New Jersey 🇺🇸',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'sfo',
		name: 'San Francisco International Airport (SFO)',
		city: 'San Francisco, USA - California 🇺🇸',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Pacific'
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental Airport (IAH)',
		city: 'Houston, USA - Texas 🇺🇸',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo', 'mia', 'hnl'],
		isHub: true,
		tz: 'US/Central'
	},
	{
		code: 'mia',
		name: 'Miami International Airport (MIA)',
		city: 'Miami, USA - Florida 🇺🇸',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah', 'hnl'],
		isHub: true,
		tz: 'US/Eastern'
	},
	{
		code: 'hnl',
		name: 'Daniel K. Inouye International Airport (HNL)',
		city: 'Honolulu, USA - Hawaii 🇺🇸',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		isHub: true,
		tz: 'US/Hawaii'
	},
	{
		name: 'Albuquerque International Airport (ABQ)',
		city: 'Albuquerque, USA - New Mexico 🇺🇸',
		pos: [35.04446359549329, -106.61291166771365],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Kotoka International Airport (ACC)',
		city: 'Accra, Ghana 🇬🇭',
		pos: [5.606084818402552, -0.1681342315152777],
		hubs: ['mia'],
		tz: 'Africa/Accra'
	},
	{
		name: 'Auckland Airport (AKL)',
		city: 'Auckland, New Zealand 🇳🇿',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['hnl'],
		tz: 'Pacific/Auckland'
	},
	{
		name: 'Albany International Airport (ALB)',
		city: 'Albany, USA - New York 🇺🇸',
		pos: [42.74795631522345, -73.80264653273483],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Houari Boumediene Airport (ALG)',
		city: 'Algiers, Algeria 🇩🇿',
		pos: [36.69712417026543, 3.20821173847129],
		hubs: ['mia'],
		tz: 'Africa/Algiers'
	},
	{
		name: 'Amsterdam Schiphol Airport (AMS)',
		city: 'Amsterdam, The Netherlands 🇳🇱',
		pos: [52.310623851948954, 4.768263669222851],
		hubs: ['ewr'],
		tz: 'Europe/Amsterdam'
	},
	{
		name: 'Ted Stevens International Airport (ANC)',
		city: 'Anchorage, USA - Alaska 🇺🇸',
		pos: [61.171332648, -149.991162702],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Alaska'
	},
	{
		name: 'V.C. Bird International Airport (ANU)',
		city: 'Saint John\'s, Antigua and Barbuda 🇦🇬',
		pos: [17.141264458109006, -61.79075921641097],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Athens International Airport (ATH)',
		city: 'Athens, Greece 🇬🇷',
		pos: [37.93572283626069, 23.948437055281335],
		hubs: ['ewr'],
		tz: 'Europe/Athens'
	},
	{
		name: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
		city: 'Atlanta, USA - Georgia 🇺🇸',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Queen Beatrix International Airport (AUA)',
		city: 'Oranjestad, Aruba 🇦🇼',
		pos: [12.502909500135036, -70.00820204601975],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Austin-Bergstrom International Airport (AUS)',
		city: 'Austin, USA - Texas 🇺🇸',
		pos: [30.19868847903938, -97.66571921787173],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'El Dorado International Airport (BOG)',
		city: 'Bogota, Colombia 🇨🇴',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
		tz: 'America/Bogota'
	},
	{
		name: 'Boise Airport (BOI)',
		city: 'Boise, USA - Idaho 🇺🇸',
		pos: [43.56613372250894, -116.22244467737012],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Boston Logan International Airport (BOS)',
		city: 'Boston, USA - Massachusetts 🇺🇸',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Barcelona-El Prat Airport (BCN)',
		city: 'Barcelona, Spain 🇪🇸',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'L.F. Wade International Airport (BDA)',
		city: 'Hamilton, Bermuda 🇧🇲',
		pos: [32.359855537423016, -64.70471205965694],
		hubs: ['ewr', 'mia'],
		tz: 'Atlantic/Bermuda'
	},
	{
		name: 'Nashville International Airport (BNA)',
		city: 'Nashville, USA - Tennessee 🇺🇸',
		pos: [36.126169659792566, -86.67743567520559],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Bradley International Airport (BDL)',
		city: 'Hartford, USA - Connecticut 🇺🇸',
		pos: [41.938985209387795, -72.68590265544461],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Western Nebraska-Scottsbluff Regional Airport (BFF)',
		city: 'Scottsbluff, USA - Nebraska 🇺🇸',
		pos: [41.87180880453483, -103.5942995049976],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Grantley Adams International Airport (BGI)',
		city: 'Christ Church, Barbados 🇧🇧',
		pos: [13.080035627493604, -59.48774184440369],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Birmingham-Shuttlesworth International Airport (BHM)',
		city: 'Birmingham, USA - Alabama 🇺🇸',
		pos: [33.5624358209084, -86.75405090040849],
		hubs: ['ewr', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Billings-Logan International Airport (BIL)',
		city: 'Billings, USA - Montana 🇺🇸',
		pos: [45.80363522704425, -108.53800003259418],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Brisbane Airport (BNE)',
		city: 'Brisbane, Australia 🇦🇺',
		pos: [-27.39418580574182, 153.1218517553009],
		hubs: ['hnl'],
		tz: 'Australia/Brisbane'
	},
	{
		name: 'Brasília International Airport (BSB)',
		city: 'Brasília, Brazil 🇧🇷',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Burlington International Airport (BTV)',
		city: 'Burlington, USA - Vermont 🇺🇸',
		pos: [44.470755128608445, -73.1516788038435],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Buffalo Niagara International Airport (BUF)',
		city: 'Buffalo, USA - New York 🇺🇸',
		pos: [42.93973729622188, -78.72948524437224],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Hollywood Burbank Airport (BUR)',
		city: 'Burbank, USA - California 🇺🇸',
		pos: [34.19832105435531, -118.35736068695542],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Baltimore/Washington International Airport (BWI)',
		city: 'Baltimore, USA - Maryland 🇺🇸',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Bozeman Yellowstone International Airport (BZN)',
		city: 'Bozeman, USA - Montana 🇺🇸',
		pos: [45.77835940397085, -111.16142041964636],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Akron-Canton Airport (CAK)',
		city: 'Akron, USA - Ohio 🇺🇸',
		pos: [40.91539520193488, -81.4415358425859],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Paris Charles de Gaulle Airport (CDG)',
		city: 'Paris, France 🇫🇷',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
		tz: 'Europe/Paris'
	},
	{
		name: 'Charleston International Airport (CHS)',
		city: 'Charleston, USA - South Carolina 🇺🇸',
		pos: [32.89249643, -80.037666516],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Eastern Iowa Airport (CID)',
		city: 'Cedar Rapids, USA - Iowa 🇺🇸',
		pos: [41.88633815541166, -91.70700758853724],
		hubs: ['ewr', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Cleveland Hopkins International Airport (CLE)',
		city: 'Cleveland, USA - Ohio 🇺🇸',
		pos: [41.405886997309366, -81.85371669778253],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Charlotte Douglas International Airport (CLT)',
		city: 'Charlotte, USA - North Carolina 🇺🇸',
		pos: [35.214358753004724, -80.94714294071665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'John Glenn Columbus International Airport (CMH)',
		city: 'Columbus, USA - Ohio 🇺🇸',
		pos: [39.99990700422163, -82.88685483700165],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Mohammed V International Airport (CMN)',
		city: 'Casablanca, Morocco 🇲🇦',
		pos: [33.370015580895306, -7.5857562888435845],
		hubs: ['mia'],
		tz: 'Africa/Casablanca'
	},
	{
		name: 'Colorado Springs Airport (COS)',
		city: 'Colorado Springs, USA - Colorado 🇺🇸',
		pos: [38.80179559142115, -104.70258244384314],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Cape Town International Airport (CPT)',
		city: 'Cape Town, South Africa 🇿🇦',
		pos: [-33.971498570998, 18.60206364117647],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Cancún International Airport (CUN)',
		city: 'Cancún, Mexico 🇲🇽',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'America/Cancun'
	},
	{
		name: 'Curaçao International Airport (CUR)',
		city: 'Willemstad, Curaçao 🇨🇼',
		pos: [12.189339619252113, -68.96166422979832],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Cincinnati/Northern Kentucky International Airport (CVG)',
		city: 'Cincinnati, USA - Ohio 🇺🇸',
		pos: [39.05091119818685, -84.66749507901761],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Cassidy International Airport (CXI)',
		city: 'Kiritimati, Kiribati 🇰🇮',
		pos: [1.9867631645901074, -157.35021966168168],
		hubs: ['hnl'],
		tz: 'Pacific/Kiritimati'
	},
	{
		name: 'Indira Gandhi International Airport (DEL)',
		city: 'New Delhi, India 🇮🇳',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
		tz: 'Asia/Kolkata'
	},
	{
		name: 'Denver International Airport (DEN)',
		city: 'Denver, USA - Colorado 🇺🇸',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Dallas/Fort Worth International Airport (DFW)',
		city: 'Dallas, USA - Texas 🇺🇸',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Des Moines International Airport (DSM)',
		city: 'Des Moines, USA - Iowa 🇺🇸',
		pos: [41.53421361181389, -93.65911766543995],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Blaise Diagne International Airport (DSS)',
		city: 'Ndiass, Senegal 🇸🇳',
		pos: [14.671072249456303, -17.06737968914397],
		hubs: ['mia'],
		tz: 'GMT'
	},
	{
		name: 'Detroit Metropolitan Wayne County Airport (DTW)',
		city: 'Detroit, USA - Michigan 🇺🇸',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Dublin Airport (DUB)',
		city: 'Dublin, Ireland 🇮🇪',
		pos: [53.42641611587296, -6.249684496130292],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Dubai International Airport (DXB)',
		city: 'Dubai, United Arab Emirates 🇦🇪',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
		tz: 'Asia/Dubai'
	},
	{
		name: 'Edinburgh Airport (EDI)',
		city: 'Edinburgh, United Kingdom 🇬🇧',
		pos: [55.95077897347942, -3.3614102862399537],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'El Paso International Airport (ELP)',
		city: 'El Paso, USA - Texas 🇺🇸',
		pos: [31.80542655947106, -106.38241304461272],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Ezeiza International Airport (EZE)',
		city: 'Buenos Aires, Argentina 🇦🇷',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
		tz: 'America/Argentina/Buenos_Aires'
	},
	{
		name: 'Hector International Airport (FAR)',
		city: 'Fargo, USA - North Dakota 🇺🇸',
		pos: [46.92181462122193, -96.81670671316597],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Fresno Yosemite International Airport (FAT)',
		city: 'Fresno, USA - California 🇺🇸',
		pos: [36.77582349137883, -119.7182263207816],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Glacier Park International Airport (FCA)',
		city: 'Kalispell, USA - Montana 🇺🇸',
		pos: [48.30775754813589, -114.25254443066616],
		hubs: ['ewr', 'iah'],
		tz: 'US/Mountain'
	},
	{
		name: 'Leonardo da Vinci International Airport (FCO)',
		city: 'Rome, Italy 🇮🇹',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
		tz: 'Europe/Rome'
	},
	{
		name: 'Fort Lauderdale-Hollywood International Airport (FLL)',
		city: 'Fort Lauderdale, USA - Florida 🇺🇸',
		pos: [26.074330752581144, -80.1506451175699],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Grand Bahama Airport (FPO)',
		city: 'Freeport, Bahamas 🇧🇸',
		pos: [26.54776858081397, -78.70253123123514],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Frankfurt Airport (FRA)',
		city: 'Frankfurt, Germany 🇩🇪',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Sioux Falls Regional Airport (FSD)',
		city: 'Sioux Falls, USA - South Dakota 🇺🇸',
		pos: [43.58285310955137, -96.74018491546143],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Miguel Hidalgo y Costilla International Airport (GDL)',
		city: 'Guadalajara, Mexico 🇲🇽',
		pos: [20.52589580006699, -103.30765718888681],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Rio de Janeiro/Galeao International Airport (GIG)',
		city: 'Rio di Janeiro, Brazil 🇧🇷',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Gerald R. Ford International Airport (GRR)',
		city: 'Grand Rapids, USA - Michigan 🇺🇸',
		pos: [42.8824264791552, -85.52425954433107],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'São Paulo/Guarulhos International Airport (GRU)',
		city: 'São Paulo, Brazil 🇧🇷',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
		tz: 'Brazil/East'
	},
	{
		name: 'Antonio B. Won Pat International Airport (GUM)',
		city: 'Guam 🇬🇺, US Territories',
		pos: [13.4863791493778, 144.80040397596647],
		hubs: ['hnl'],
		tz: 'Pacific/Guam'
	},
	{
		name: 'Jose Marti International Airport (HAV)',
		city: 'Havana, Cuba 🇨🇺',
		pos: [22.98666272, -82.405331712],
		hubs: ['mia'],
		tz: 'Cuba'
	},
	{
		name: 'Hong Kong International Airport (HKG)',
		city: 'Hong Kong, China 🇨🇳',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
		tz: 'Asia/Hong_Kong'
	},
	{
		name: 'Dulles International Airport (IAD)',
		city: 'Washington, USA - D.C. 🇺🇸',
		pos: [38.95327013665701, -77.4565514890331],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Incheon International Airport (ICN)',
		city: 'Seoul, South Korea 🇰🇷',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
		tz: 'Asia/Seoul'
	},
	{
		name: 'Dwight D. Eisenhower Airport (ICT)',
		city: 'Wichita, USA - Kansas 🇺🇸',
		pos: [37.65083588295067, -97.42868807453723],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Hilo International Airport (ITO)',
		city: 'Hilo, USA - Hawaii 🇺🇸',
		pos: [19.71828308321948, -155.04165378827003],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Indianapolis International Airport (IND)',
		city: 'Indianapolis, USA - Indiana 🇺🇸',
		pos: [39.716991323244, -86.29558447337403],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Jackson-Medgar Wiley Evers International Airport (JAN)',
		city: 'Jackson, USA - Mississippi 🇺🇸',
		pos: [32.31234643525699, -90.07632339635566],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Jacksonville International Airport (JAX)',
		city: 'Jacksonville, USA - Florida 🇺🇸',
		pos: [30.4940250575088, -81.68793680243796],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'John F. Kennedy International Airport (JFK)',
		city: 'New York, USA - New York 🇺🇸',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'O.R. Tambo International Airport (JNB)',
		city: 'Johannesburg, South Africa 🇿🇦',
		pos: [-26.136691994110528, 28.241156617041295],
		hubs: ['mia'],
		tz: 'Africa/Johannesburg'
	},
	{
		name: 'Keflavík International Airport (KEF)',
		city: 'Reykjavík, Iceland 🇮🇸',
		pos: [63.98070701155434, -22.627620001362224],
		hubs: ['ewr'],
		tz: 'Iceland'
	},
	{
		name: 'Kona International Airport (KOA)',
		city: 'Kailua-Kona, USA - Hawaii 🇺🇸',
		pos: [19.737769862987626, -156.0428956900814],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Harry Reid International Airport (LAS)',
		city: 'Las Vegas, USA - Nevada 🇺🇸',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Los Angeles International Airport (LAX)',
		city: 'Los Angeles, USA - California 🇺🇸',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Blue Grass Airport (LEX)',
		city: 'Lexington, USA - Kentucky 🇺🇸',
		pos: [38.03779528003609, -84.60259757335659],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Heathrow Airport (LHR)',
		city: 'London, United Kingdom 🇬🇧',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
		tz: 'Europe/London'
	},
	{
		name: 'Lihue Airport (LIH)',
		city: 'Lihue, USA - Hawaii 🇺🇸',
		pos: [21.978913933768247, -159.34382035743394],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Jorge Chavez International Airport (LIM)',
		city: 'Lima, Peru 🇵🇪',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Humberto Delgado Airport (LIS)',
		city: 'Lisbon, Portugal 🇵🇹',
		pos: [38.77616204030518, -9.135280903021002],
		hubs: ['ewr'],
		tz: 'Europe/Lisbon'
	},
	{
		name: 'Clinton National Airport (LIT)',
		city: 'Little Rock, USA - Arkansas 🇺🇸',
		pos: [34.73014934857, -92.219905134052],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Lanai Airport (LNY)',
		city: 'Lanai City, USA - Hawaii 🇺🇸',
		pos: [20.79129049571412, -156.95037799977516],
		hubs: ['hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Murtala Muhammed International Airport (LOS)',
		city: 'Lagos, Nigeria 🇳🇬',
		pos: [6.582042315799838, 3.3210704254376475],
		hubs: ['mia'],
		tz: 'Africa/Lagos'
	},
	{
		name: 'Adolfo Suarez Madrid-Barajas Airport (MAD)',
		city: 'Madrid, Spain 🇪🇸',
		pos: [40.49847903162269, -3.5676089311550063],
		hubs: ['ewr'],
		tz: 'Europe/Madrid'
	},
	{
		name: 'Sangster International Airport (MBJ)',
		city: 'Montego Bay, Jamaica 🇯🇲',
		pos: [18.502391775768107, -77.91451690151644],
		hubs: ['mia'],
		tz: 'America/Jamaica'
	},
	{
		name: 'Kansas City International Airport (MCI)',
		city: 'Kansas City, USA - Missouri 🇺🇸',
		pos: [39.30346588697873, -94.70907396438118],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Orlando International Airport (MCO)',
		city: 'Orlando, USA - Florida 🇺🇸',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Eastern'
	},
	{
		name: 'Melbourne Airport (MEL)',
		city: 'Melbourne, Australia 🇦🇺',
		pos: [-37.670866092849224, 144.84387908076323],
		hubs: ['hnl'],
		tz: 'Australia/Melbourne'
	},
	{
		name: 'Memphis International Airport (MEM)',
		city: 'Memphis, USA - Tennessee 🇺🇸',
		pos: [35.041980059680945, -89.97921581534257],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mexico City International Airport (MEX)',
		city: 'Mexico City, Mexico 🇲🇽',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Manchester-Boston Regional Airport (MHT)',
		city: 'Manchester, USA - New Hampshire 🇺🇸',
		pos: [42.9297832621787, -71.43505763213719],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'General Mitchell International Airport (MKE)',
		city: 'Milwaukee, USA - Wisconsin 🇺🇸',
		pos: [42.94783578343849, -87.89664603166004],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ninoy Aquino International Airport (MNL)',
		city: 'Manila, Philippines 🇵🇭',
		pos: [14.505164646, 121.01833326],
		hubs: ['hnl'],
		tz: 'Asia/Manila'
	},
	{
		name: 'Dane County Regional Airport (MSN)',
		city: 'Madison, USA - Wisconsin 🇺🇸',
		pos: [43.139089365511055, -89.33638061548804],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Missoula Montana Airport (MSO)',
		city: 'Missoula, USA - Montana 🇺🇸',
		pos: [46.91876701016805, -114.08363087487372],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Minneapolis-Saint Paul International Airport (MSP)',
		city: 'Minneapolis, USA - Minnesota 🇺🇸',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Louis Armstrong New Orleans International Airport (MSY)',
		city: 'New Orleans, USA - Louisiana 🇺🇸',
		pos: [29.991146272960744, -90.25862783681688],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Monterrey International (MTY)',
		city: 'Monterrey, Mexico 🇲🇽',
		pos: [25.777322304453758, -100.11456996208241],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Munich International Airport (MUC)',
		city: 'Munich, Germany 🇩🇪',
		pos: [48.35101828934641, 11.776488342315458],
		hubs: ['ewr'],
		tz: 'Europe/Berlin'
	},
	{
		name: 'Nadi Airport (NAN)',
		city: 'Nadi, Fiji 🇫🇯',
		pos: [-17.75183452525651, 177.45078438213463],
		hubs: ['hnl'],
		tz: 'Pacific/Fiji'
	},
	{
		name: 'Lynden Pindling International Airport (NAS)',
		city: 'Nassau, Bahamas 🇧🇸',
		pos: [25.04400654513227, -77.46580015121297],
		hubs: ['ewr', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Narita International Airport (NRT)',
		city: 'Tokyo, Japan 🇯🇵',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['ewr', 'sfo'],
		tz: 'Asia/Tokyo'
	},
	{
		name: 'Oakland International Airport (OAK)',
		city: 'Oakland, USA - California 🇺🇸',
		pos: [37.71148324911222, -122.2193824513291],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Kahului Airport (OGG)',
		city: 'Kahului, USA - Hawaii 🇺🇸',
		pos: [20.894645227300344, -156.43600538629138],
		hubs: ['sfo', 'hnl'],
		tz: 'US/Hawaii'
	},
	{
		name: 'Will Rogers Airport (OKC)',
		city: 'Oklahoma City, USA - Oklahoma 🇺🇸',
		pos: [35.39319572984369, -97.60050445075717],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Eppley Airfield (OMA)',
		city: 'Omaha, USA - Nebraska 🇺🇸',
		pos: [41.30224308640403, -95.89469287800654],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Ontario International Airport (ONT)',
		city: 'Ontario, USA - California 🇺🇸',
		pos: [34.05596214250547, -117.59904106790037],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'O\'Hare International Airport (ORD)',
		city: 'Chicago, USA - Illinois 🇺🇸',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Central'
	},
	{
		name: 'Norfolk International Airport (ORF)',
		city: 'Norfolk, USA - Virginia 🇺🇸',
		pos: [36.89570942043663, -76.20000537338909],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Palm Beach International Airport (PBI)',
		city: 'West Palm Beach, USA - Florida 🇺🇸',
		pos: [26.685785827360075, -80.09283796017972],
		hubs: ['ewr', 'sfo', 'iah'],
		tz: 'US/Eastern'
	},
	{
		name: 'Portland International Airport (PDX)',
		city: 'Portland, USA - Oregon 🇺🇸',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Beijing Capital International Airport (PEK)',
		city: 'Beijing, China 🇨🇳',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Philadelphia International Airport (PHL)',
		city: 'Philadelphia, USA - Pennsylvania 🇺🇸',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Phoenix Sky Harbor International Airport (PHX)',
		city: 'Phoenix, USA - Arizona 🇺🇸',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Mountain'
	},
	{
		name: 'Pittsburgh International Airport (PIT)',
		city: 'Pittsburgh, USA - Pennsylvania 🇺🇸',
		pos: [40.49183102751426, -80.23501945402671],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Providenciales International Airport (PLS)',
		city: 'Providenciales, Turks and Caicos Islands 🇹🇨',
		pos: [21.776326359168177, -72.27128035731569],
		hubs: ['mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Piarco International Airport (POS)',
		city: 'Piarco, Trinidad and Tobago 🇹🇹',
		pos: [10.597664754910571, -61.33951627377069],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Pago Pago International Airport (PPG)',
		city: 'Pago Pago, American Samoa 🇦🇸, US Territories',
		pos: [-14.328529463205866, -170.71318872964144],
		hubs: ['hnl'],
		tz: 'Pacific/Pago_Pago'
	},
	{
		name: 'Fa\'a\'a International Airport (PPT)',
		city: 'Tahiti, French Polynesia 🇵🇫',
		pos: [-17.55960524555043, -149.61021228790472],
		hubs: ['hnl'],
		tz: 'Pacific/Tahiti'
	},
	// {
	// 	name: 'Vaclav Havel Airport (PRG)',
	// 	city: 'Prague, Czechia 🇨🇿',
	// 	pos: [50.101859796884526, 14.263234742416973],
	// 	hubs: ['ewr'],
	// },
	{
		name: 'Palm Springs International Airport (PSP)',
		city: 'Palm Springs, USA - California 🇺🇸',
		pos: [33.830568637238926, -116.50696100322521],
		hubs: ['sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Punta Cana International Airport (PUJ)',
		city: 'Punta Cana, Dominican Republic 🇩🇴',
		pos: [18.563260946101263, -68.36852528802461],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'T.F. Green International Airport (PVD)',
		city: 'Providence, USA - Rhode Island 🇺🇸',
		pos: [41.723507528600045, -71.42691301444177],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Licenciado Gustavo Diaz Ordaz International (PVR)',
		city: 'Puerto Vallarta, Mexico 🇲🇽',
		pos: [20.68049831115806, -105.2524298465564],
		hubs: ['iah'],
		tz: 'America/Mexico_City'
	},
	{
		name: 'Portland International Jetport (PWM)',
		city: 'Portland, USA - Maine 🇺🇸',
		pos: [43.64570214332969, -70.31004072274055],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Rapid City Regional Airport (RAP)',
		city: 'Rapid City, USA - South Dakota 🇺🇸',
		pos: [44.038372066425026, -103.06043047128412],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Raleigh-Durham International Airport (RDU)',
		city: 'Raleigh, USA - North Carolina 🇺🇸',
		pos: [35.88007898015302, -78.78797484463837],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Richmond International Airport (RIC)',
		city: 'Richmond, USA - Virginia 🇺🇸',
		pos: [37.50677505510212, -77.32084242371478],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Reno-Tahoe International Airport (RNO)',
		city: 'Reno, USA - Nevada 🇺🇸',
		pos: [39.49964863013703, -119.76805218683198],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Southwest Florida International Airport (RSW)',
		city: 'Fort Myers, USA - Florida 🇺🇸',
		pos: [26.533753077135888, -81.75534048896644],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'San Diego International Airport (SAN)',
		city: 'San Diego, USA - California 🇺🇸',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Savannah/Hilton Head International Airport (SAV)',
		city: 'Savannah, USA - Georgia 🇺🇸',
		pos: [32.12939158823519, -81.20176254594122],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Louisville Muhammad Ali International Airport (SDF)',
		city: 'Louisville, USA - Kentucky 🇺🇸',
		pos: [38.183129274399, -85.741038508206],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Norman Y. Mineta San Jose International Airport (SJC)',
		city: 'San Jose, USA - California 🇺🇸',
		pos: [37.363665715803144, -121.92895897613796],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'Robert L. Bradshaw International Airport (SKB)',
		city: 'Basseterre, Saint Kitts & Nevis 🇰🇳',
		pos: [17.3108341120326, -62.71916974592183],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Shannon Airport (SNN)',
		city: 'Shannon, Ireland 🇮🇪',
		pos: [52.69897449709459, -8.914894175822724],
		hubs: ['ewr'],
		tz: 'Europe/Dublin'
	},
	{
		name: 'Princess Juliana International Airport (SXM)',
		city: 'Sint Maarten 🇸🇽',
		pos: [18.04192078940854, -63.113028459403225],
		hubs: ['mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'San Antonio International Airport (SAT)',
		city: 'San Antonio, USA - Texas 🇺🇸',
		pos: [29.531290632199877, -98.46845569088684],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Seattle-Tacoma International Airport (SEA)',
		city: 'Seattle, USA - Washington 🇺🇸',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'US/Pacific'
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		city: 'Santiago, Chile 🇨🇱',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
		tz: 'America/Santiago'
	},
	{
		name: 'Shanghai Hongqiao International Airport (SHA)',
		city: 'Shanghai, China 🇨🇳',
		pos: [31.193096387538194, 121.33369906532243],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Singapore Changi Airport (SIN)',
		city: 'Singapore 🇸🇬',
		pos: [1.3655760814659688, 103.99134627431354],
		hubs: ['hnl'],
		tz: 'Asia/Singapore'
	},
	{
		name: 'Los Cabos International Airport (SJD)',
		city: 'San José del Cabo, Mexico 🇲🇽',
		pos: [23.1456048417308, -109.71832014651572],
		hubs: ['iah'],
		tz: 'Mexico/BajaSur'
	},
	{
		name: 'Luis Munoz Marin International Airport (SJU)',
		city: 'San Juan, Puerto Rico 🇵🇷, US Territories',
		pos: [18.439669035343876, -65.99915740046777],
		hubs: ['ewr', 'mia'],
		tz: 'America/Puerto_Rico'
	},
	{
		name: 'Salt Lake City International Airport (SLC)',
		city: 'Salt Lake City, USA - Utah 🇺🇸',
		pos: [40.79051939628816, -111.97902094610347],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'Sacramento International Airport (SMF)',
		city: 'Sacramento, USA - California 🇺🇸',
		pos: [38.69506863213448, -121.59003261580382],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Pacific'
	},
	{
		name: 'St. Louis Lambert International Airport (STL)',
		city: 'St. Louis, USA - Missouri 🇺🇸',
		pos: [38.74996298137237, -90.37484608851419],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Sydney Airport (SYD)',
		city: 'Sydney, Australia 🇦🇺',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['hnl'],
		tz: 'Australia/Sydney'
	},
	{
		name: 'Chengdu Shuangliu International Airport (TFU)',
		city: 'Chengdu, China 🇨🇳',
		pos: [30.271849965598296, 104.44447857901999],
		hubs: ['sfo'],
		tz: 'Asia/Shanghai'
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		city: 'Tel Aviv, Israel 🇮🇱',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
		tz: 'Asia/Tel_Aviv'
	},
	{
		name: 'Tampa International Airport (TPA)',
		city: 'Tampa, USA - Florida 🇺🇸',
		pos: [27.977171332699836, -82.53112747358927],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Eastern'
	},
	{
		name: 'Taiwan Taoyuan International Airport (TPE)',
		city: 'Taipei, Taiwan 🇹🇼',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
		tz: 'Asia/Taipei'
	},
	{
		name: 'Bonriki International Airport (TRW)',
		city: 'Tarawa, Kiribati 🇰🇮',
		pos: [1.3816943367896826, 173.14677443116932],
		hubs: ['hnl'],
		tz: 'Pacific/Tarawa'
	},
	{
		name: 'Tulsa International Airport (TUL)',
		city: 'Tulsa, USA - Oklahoma 🇺🇸',
		pos: [36.198655852278264, -95.8837988854985],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Central'
	},
    {
		name: 'Tucson International Airport (TUS)',
		city: 'Tucson, USA - Arizona 🇺🇸',
		pos: [32.109666228, -110.937996248],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'US/Mountain'
	},
	{
		name: 'McGhee Tyson Airport (TYS)',
		city: 'Knoxville, USA - Tennessee 🇺🇸',
		pos: [35.81082427967718, -83.99379244250953],
		hubs: ['iah', 'mia'],
		tz: 'US/Central'
	},
	{
		name: 'Mariscal Sucre Quito International Airport (UIO)',
		city: 'Quito, Ecuador 🇪🇨',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
		tz: 'America/Lima'
	},
	{
		name: 'Edmonton International Airport (YEG)',
		city: 'Edmonton, Canada 🇨🇦',
		pos: [53.30623686908562, -113.58276804327605],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Ottawa International Airport (YOW)',
		city: 'Ottawa, Canada 🇨🇦',
		pos: [45.31923461124119, -75.66914374429483],
		hubs: ['ewr', 'iah'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Montreal-Pierre Elliott Trudeau International Airport (YUL)',
		city: 'Montreal, Canada 🇨🇦',
		pos: [45.461698664876224, -73.7478869554127],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Calgary International Airport (YYC)',
		city: 'Calgary, Canada 🇨🇦',
		pos: [51.12150310000004, -114.00819495762246],
		hubs: ['ewr', 'iah', 'mia'],
		tz: 'Canada/Mountain'
	},
	{
		name: 'Vancouver International Airport (YVR)',
		city: 'Vancouver, Canada 🇨🇦',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['ewr', 'sfo', 'iah', 'mia', 'hnl'],
		tz: 'Canada/Pacific'
	},
	{
		name: 'Toronto Pearson International Airport (YYZ)',
		city: 'Toronto, Canada 🇨🇦',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['ewr', 'sfo', 'iah', 'mia'],
		tz: 'Canada/Eastern'
	},
	{
		name: 'Zurich Airport (ZRH)',
		city: 'Zurich, Switzerland 🇨🇭',
		pos: [47.461358490923374, 8.553454682550841],
		hubs: ['ewr'],
		tz: 'Europe/Zurich'
	},
];

var FLIGHT_SCHEDULE = `Route,Flight,Aircraft,Type,Route Link,Flight Link,Aircraft Link,Departure,Arrival,Pax,Turnover,Result
EWR - ABQ,52529308158,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52529308158,https://www.airlines-manager.com/aircraft/show/90717078,0:45,9:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52529308159,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52529308159,https://www.airlines-manager.com/aircraft/show/95950199,2:45,11:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52543755558,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52543755558,https://www.airlines-manager.com/aircraft/show/90717079,10:00,19:14,310,"$573,352.00","$527,376.00"
EWR - ABQ,52561334687,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52561334687,https://www.airlines-manager.com/aircraft/show/90717077,16:45,1:59,310,"$573,352.00","$527,376.00"
EWR - ABQ,52561334688,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845061,https://www.airlines-manager.com/network/showflight/52561334688,https://www.airlines-manager.com/aircraft/show/90717076,17:45,2:59,309,"$570,099.00","$524,197.00"
EWR - AMS,52551230470,EWR 56B-4 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52551230470,https://www.airlines-manager.com/aircraft/show/94521247,11:30,2:44,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,52551230471,EWR 56B-2 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52551230471,https://www.airlines-manager.com/aircraft/show/90656556,13:15,4:29,748,"$2,319,071.00","$2,074,245.00"
EWR - AMS,52556327740,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42008197,https://www.airlines-manager.com/network/showflight/52556327740,https://www.airlines-manager.com/aircraft/show/89124072,15:00,6:14,747,"$2,072,731.00","$1,889,725.00"
EWR - ANC,52529308922,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52529308922,https://www.airlines-manager.com/aircraft/show/103406580,4:00,18:59,0,"$313,596.00","$249,742.00"
EWR - ANC,52543755574,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52543755574,https://www.airlines-manager.com/aircraft/show/115400546,10:00,0:59,338,"$995,874.00","$932,790.00"
EWR - ANC,52551230664,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52551230664,https://www.airlines-manager.com/aircraft/show/115400547,13:15,4:14,338,"$995,874.00","$932,790.00"
EWR - ANC,52566418061,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52566418061,https://www.airlines-manager.com/aircraft/show/115400548,18:45,9:44,338,"$995,874.00","$932,790.00"
EWR - ANC,52570802843,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44793460,https://www.airlines-manager.com/network/showflight/52570802843,https://www.airlines-manager.com/aircraft/show/115400545,21:45,12:44,338,"$906,951.00","$851,536.00"
EWR - ATH,52529307882,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52529307882,https://www.airlines-manager.com/aircraft/show/94521249,0:00,19:59,852,"$3,233,736.00","$2,941,443.00"
EWR - ATH,52566418142,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/39747655,https://www.airlines-manager.com/network/showflight/52566418142,https://www.airlines-manager.com/aircraft/show/90656551,19:45,15:44,852,"$3,233,736.00","$2,941,443.00"
EWR - ATL,52543755552,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52543755552,https://www.airlines-manager.com/aircraft/show/90489724,10:00,14:59,320,"$316,268.00","$254,951.00"
EWR - ATL,52556327696,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52556327696,https://www.airlines-manager.com/aircraft/show/90489726,14:15,19:14,320,"$316,268.00","$254,951.00"
EWR - ATL,52561334751,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52561334751,https://www.airlines-manager.com/aircraft/show/90489725,17:30,22:29,320,"$316,268.00","$254,951.00"
EWR - ATL,52566418018,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52566418018,https://www.airlines-manager.com/aircraft/show/105222360,18:30,23:29,198,"$240,935.00","$198,865.00"
EWR - ATL,52566418019,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52566418019,https://www.airlines-manager.com/aircraft/show/86238752,19:45,0:44,320,"$316,268.00","$254,951.00"
EWR - ATL,52570802887,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39256202,https://www.airlines-manager.com/network/showflight/52570802887,https://www.airlines-manager.com/aircraft/show/86238753,22:15,3:14,320,"$316,268.00","$254,951.00"
EWR - AUS,52529308525,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52529308525,https://www.airlines-manager.com/aircraft/show/90717077,2:00,9:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52529308527,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52529308527,https://www.airlines-manager.com/aircraft/show/90717076,3:00,10:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52543755616,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52543755616,https://www.airlines-manager.com/aircraft/show/90717078,10:00,17:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52551230545,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52551230545,https://www.airlines-manager.com/aircraft/show/95950199,12:00,19:59,310,"$499,178.00","$457,934.00"
EWR - AUS,52566418106,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43845077,https://www.airlines-manager.com/network/showflight/52566418106,https://www.airlines-manager.com/aircraft/show/90717079,19:15,3:14,310,"$499,178.00","$457,934.00"
EWR - BCN,52556327815,EWR 84A-5 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52556327815,https://www.airlines-manager.com/aircraft/show/94521250,15:45,7:44,852,"$2,614,196.00","$2,371,899.00"
EWR - BCN,52566418154,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39983692,https://www.airlines-manager.com/network/showflight/52566418154,https://www.airlines-manager.com/aircraft/show/94521252,20:00,11:59,852,"$2,614,196.00","$2,371,899.00"
EWR - BDA,52543755484,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52543755484,https://www.airlines-manager.com/aircraft/show/115493369,8:45,13:59,198,"$243,326.00","$221,553.00"
EWR - BDA,52543755485,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52543755485,https://www.airlines-manager.com/aircraft/show/98936170,11:00,16:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52551230580,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52551230580,https://www.airlines-manager.com/aircraft/show/98936171,13:00,18:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52570802766,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52570802766,https://www.airlines-manager.com/aircraft/show/98936168,21:00,2:14,320,"$321,087.00","$290,297.00"
EWR - BDA,52570802767,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208029,https://www.airlines-manager.com/network/showflight/52570802767,https://www.airlines-manager.com/aircraft/show/98936169,22:30,3:44,252,"$258,020.00","$229,013.00"
EWR - BDL,52529308175,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52529308175,https://www.airlines-manager.com/aircraft/show/108834811,1:00,3:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52543755531,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52543755531,https://www.airlines-manager.com/aircraft/show/108466265,9:30,11:59,112,"$38,352.00","$27,154.00"
EWR - BDL,52556327690,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52556327690,https://www.airlines-manager.com/aircraft/show/108834810,14:00,16:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52556327691,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52556327691,https://www.airlines-manager.com/aircraft/show/108834809,16:00,18:29,310,"$89,382.00","$71,054.00"
EWR - BDL,52570802942,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218149,https://www.airlines-manager.com/network/showflight/52570802942,https://www.airlines-manager.com/aircraft/show/108834808,23:00,1:29,310,"$89,382.00","$71,054.00"
EWR - BFF,52529308605,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52529308605,https://www.airlines-manager.com/aircraft/show/98936168,2:15,10:14,320,"$505,501.00","$462,790.00"
EWR - BFF,52529308607,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52529308607,https://www.airlines-manager.com/aircraft/show/98936169,3:45,11:44,320,"$505,501.00","$462,790.00"
EWR - BFF,52556327620,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52556327620,https://www.airlines-manager.com/aircraft/show/115493369,14:00,21:59,198,"$381,668.00","$350,758.00"
EWR - BFF,52561334653,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52561334653,https://www.airlines-manager.com/aircraft/show/98936170,16:15,0:14,320,"$505,501.00","$462,790.00"
EWR - BFF,52561334654,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208024,https://www.airlines-manager.com/network/showflight/52561334654,https://www.airlines-manager.com/aircraft/show/98936171,18:15,2:14,320,"$505,501.00","$462,790.00"
EWR - BHM,52529308609,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52529308609,https://www.airlines-manager.com/aircraft/show/116042862,2:15,7:44,310,"$345,483.00","$316,690.00"
EWR - BHM,52543755441,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52543755441,https://www.airlines-manager.com/aircraft/show/116042859,8:30,13:59,310,"$345,483.00","$316,690.00"
EWR - BHM,52556327645,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52556327645,https://www.airlines-manager.com/aircraft/show/116042860,14:00,19:29,310,"$345,483.00","$316,690.00"
EWR - BHM,52556327646,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372685,https://www.airlines-manager.com/network/showflight/52556327646,https://www.airlines-manager.com/aircraft/show/116042861,15:15,20:44,310,"$345,483.00","$316,690.00"
EWR - BIL,52543755595,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52543755595,https://www.airlines-manager.com/aircraft/show/116047882,10:00,18:59,320,"$563,270.00","$517,313.00"
EWR - BIL,52551230536,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52551230536,https://www.airlines-manager.com/aircraft/show/116047885,12:00,20:59,320,"$563,270.00","$517,313.00"
EWR - BIL,52570802790,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52570802790,https://www.airlines-manager.com/aircraft/show/116047884,21:15,6:14,320,"$563,270.00","$517,313.00"
EWR - BIL,52570802791,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372803,https://www.airlines-manager.com/network/showflight/52570802791,https://www.airlines-manager.com/aircraft/show/116047883,22:45,7:44,320,"$563,270.00","$517,313.00"
EWR - BNA,52529308825,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52529308825,https://www.airlines-manager.com/aircraft/show/104610408,3:15,8:14,310,"$321,678.00","$292,338.00"
EWR - BNA,52543755453,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52543755453,https://www.airlines-manager.com/aircraft/show/104610409,8:30,13:29,310,"$321,678.00","$292,338.00"
EWR - BNA,52551230615,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52551230615,https://www.airlines-manager.com/aircraft/show/104610410,13:00,17:59,310,"$321,678.00","$292,338.00"
EWR - BNA,52561334722,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52561334722,https://www.airlines-manager.com/aircraft/show/96421247,17:00,21:59,112,"$152,706.00","$133,800.00"
EWR - BNA,52570802793,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849233,https://www.airlines-manager.com/network/showflight/52570802793,https://www.airlines-manager.com/aircraft/show/104610407,21:15,2:14,310,"$321,678.00","$292,338.00"
EWR - BOI,52529308346,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52529308346,https://www.airlines-manager.com/aircraft/show/110582846,1:30,11:59,198,"$490,270.00","$452,028.00"
EWR - BOI,52543755576,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52543755576,https://www.airlines-manager.com/aircraft/show/104418460,10:00,20:29,310,"$652,790.00","$605,103.00"
EWR - BOI,52556327754,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52556327754,https://www.airlines-manager.com/aircraft/show/104418463,15:00,1:29,310,"$652,790.00","$605,103.00"
EWR - BOI,52561334674,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52561334674,https://www.airlines-manager.com/aircraft/show/104418462,16:30,2:59,310,"$652,790.00","$605,103.00"
EWR - BOI,52573805922,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805680,https://www.airlines-manager.com/network/showflight/52573805922,https://www.airlines-manager.com/aircraft/show/104418461,23:30,9:59,310,"$652,790.00","$605,103.00"
EWR - BOS,52529308759,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52529308759,https://www.airlines-manager.com/aircraft/show/104034464,3:00,5:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52543755581,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52543755581,https://www.airlines-manager.com/aircraft/show/104034463,10:00,12:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52551230575,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52551230575,https://www.airlines-manager.com/aircraft/show/104034462,12:45,15:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52551230576,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52551230576,https://www.airlines-manager.com/aircraft/show/99316501,13:45,16:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52561334726,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52561334726,https://www.airlines-manager.com/aircraft/show/104034464,17:00,19:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52566418184,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52566418184,https://www.airlines-manager.com/aircraft/show/104034463,20:00,22:59,216,"$93,753.00","$73,967.00"
EWR - BOS,52570802934,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52570802934,https://www.airlines-manager.com/aircraft/show/104034462,22:45,1:44,216,"$93,753.00","$73,967.00"
EWR - BOS,52573805944,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/42865564,https://www.airlines-manager.com/network/showflight/52573805944,https://www.airlines-manager.com/aircraft/show/99316501,23:45,2:44,216,"$93,753.00","$73,967.00"
EWR - BTV,52543755479,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52543755479,https://www.airlines-manager.com/aircraft/show/116042866,8:45,11:59,310,"$139,409.00","$120,194.00"
EWR - BTV,52551230502,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52551230502,https://www.airlines-manager.com/aircraft/show/116042863,12:00,15:14,310,"$139,409.00","$120,194.00"
EWR - BTV,52551230503,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52551230503,https://www.airlines-manager.com/aircraft/show/116042864,13:00,16:14,310,"$139,409.00","$120,194.00"
EWR - BTV,52566418059,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372861,https://www.airlines-manager.com/network/showflight/52566418059,https://www.airlines-manager.com/aircraft/show/116042865,18:45,21:59,310,"$139,409.00","$120,194.00"
EWR - BUF,52529309068,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52529309068,https://www.airlines-manager.com/aircraft/show/106104450,5:30,8:44,112,"$70,522.00","$57,718.00"
EWR - BUF,52543755648,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52543755648,https://www.airlines-manager.com/aircraft/show/105731236,11:00,14:14,320,"$154,010.00","$130,040.00"
EWR - BUF,52556327718,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52556327718,https://www.airlines-manager.com/aircraft/show/88494376,14:45,17:59,320,"$154,010.00","$130,040.00"
EWR - BUF,52566418016,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52566418016,https://www.airlines-manager.com/aircraft/show/88494377,18:30,21:44,320,"$154,010.00","$130,040.00"
EWR - BUF,52570802947,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242100,https://www.airlines-manager.com/network/showflight/52570802947,https://www.airlines-manager.com/aircraft/show/88494375,23:00,2:14,320,"$154,010.00","$130,040.00"
EWR - BWI,52529307979,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52529307979,https://www.airlines-manager.com/aircraft/show/104034464,0:15,2:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52529307980,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52529307980,https://www.airlines-manager.com/aircraft/show/104034463,3:15,5:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52543755579,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52543755579,https://www.airlines-manager.com/aircraft/show/104034462,10:00,12:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52543755580,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52543755580,https://www.airlines-manager.com/aircraft/show/99316501,11:00,13:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52556327709,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52556327709,https://www.airlines-manager.com/aircraft/show/104034464,14:15,16:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52561334744,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52561334744,https://www.airlines-manager.com/aircraft/show/104034463,17:15,19:59,216,"$74,590.00","$56,020.00"
EWR - BWI,52566418178,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52566418178,https://www.airlines-manager.com/aircraft/show/104034462,20:00,22:44,216,"$74,590.00","$56,020.00"
EWR - BWI,52570802756,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/40109052,https://www.airlines-manager.com/network/showflight/52570802756,https://www.airlines-manager.com/aircraft/show/99316501,21:00,23:44,216,"$74,590.00","$56,020.00"
EWR - BZN,52529308032,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52529308032,https://www.airlines-manager.com/aircraft/show/116047885,0:30,9:44,320,"$590,536.00","$543,632.00"
EWR - BZN,52551230514,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52551230514,https://www.airlines-manager.com/aircraft/show/116047884,12:00,21:14,320,"$590,536.00","$543,632.00"
EWR - BZN,52551230515,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52551230515,https://www.airlines-manager.com/aircraft/show/116047883,13:30,22:44,320,"$590,536.00","$543,632.00"
EWR - BZN,52570802912,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372807,https://www.airlines-manager.com/network/showflight/52570802912,https://www.airlines-manager.com/aircraft/show/116047882,22:30,7:44,318,"$587,649.00","$540,859.00"
EWR - CAK,52543755464,EWR-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52543755464,https://www.airlines-manager.com/aircraft/show/116047884,8:30,11:59,320,"$190,233.00","$166,131.00"
EWR - CAK,52543755465,EWR-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52543755465,https://www.airlines-manager.com/aircraft/show/116047883,10:00,13:29,320,"$190,233.00","$166,131.00"
EWR - CAK,52566418080,EWR-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52566418080,https://www.airlines-manager.com/aircraft/show/116047882,19:00,22:29,320,"$190,233.00","$166,131.00"
EWR - CAK,52570802764,EWR-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49372801,https://www.airlines-manager.com/network/showflight/52570802764,https://www.airlines-manager.com/aircraft/show/116047885,21:00,0:29,284,"$177,247.00","$153,513.00"
EWR - CDG,52529308755,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52529308755,https://www.airlines-manager.com/aircraft/show/106813011,3:00,18:14,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,52543755473,EWR 56A-6 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52543755473,https://www.airlines-manager.com/aircraft/show/106813012,8:45,23:59,748,"$2,328,158.00","$2,067,727.00"
EWR - CDG,52566418085,EWR 56A-2 B1,777-300,https://www.airlines-manager.com/network/showline/40043578,https://www.airlines-manager.com/network/showflight/52566418085,https://www.airlines-manager.com/aircraft/show/106813008,19:00,10:14,558,"$1,737,627.00","$1,560,924.00"
EWR - CHS,52543755439,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52543755439,https://www.airlines-manager.com/aircraft/show/110044463,8:30,12:59,310,"$288,474.00","$263,530.00"
EWR - CHS,52551230506,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52551230506,https://www.airlines-manager.com/aircraft/show/110113039,12:00,16:29,112,"$137,716.00","$121,653.00"
EWR - CHS,52556327698,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52556327698,https://www.airlines-manager.com/aircraft/show/110044466,14:15,18:44,310,"$288,474.00","$263,530.00"
EWR - CHS,52570802799,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52570802799,https://www.airlines-manager.com/aircraft/show/110044465,21:15,1:44,310,"$288,474.00","$263,530.00"
EWR - CHS,52570802800,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540556,https://www.airlines-manager.com/network/showflight/52570802800,https://www.airlines-manager.com/aircraft/show/110044464,23:00,3:29,279,"$271,631.00","$247,221.00"
EWR - CID,52529308320,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52529308320,https://www.airlines-manager.com/aircraft/show/116042863,1:15,6:59,310,"$356,156.00","$327,547.00"
EWR - CID,52529308321,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52529308321,https://www.airlines-manager.com/aircraft/show/116042864,2:15,7:59,310,"$356,156.00","$327,547.00"
EWR - CID,52543755568,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52543755568,https://www.airlines-manager.com/aircraft/show/116042865,10:00,15:44,310,"$356,156.00","$327,547.00"
EWR - CID,52570802853,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372869,https://www.airlines-manager.com/network/showflight/52570802853,https://www.airlines-manager.com/aircraft/show/116042866,22:00,3:44,292,"$344,054.00","$315,895.00"
EWR - CLE,52529308457,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52529308457,https://www.airlines-manager.com/aircraft/show/106104450,1:45,5:29,112,"$91,758.00","$77,179.00"
EWR - CLE,52529308458,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52529308458,https://www.airlines-manager.com/aircraft/show/105731236,5:00,8:44,320,"$197,776.00","$170,962.00"
EWR - CLE,52543755675,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52543755675,https://www.airlines-manager.com/aircraft/show/88494376,11:00,14:44,320,"$197,776.00","$170,962.00"
EWR - CLE,52556327721,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52556327721,https://www.airlines-manager.com/aircraft/show/88494377,14:45,18:29,320,"$197,776.00","$170,962.00"
EWR - CLE,52566418099,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250227,https://www.airlines-manager.com/network/showflight/52566418099,https://www.airlines-manager.com/aircraft/show/88494375,19:15,22:59,320,"$197,776.00","$170,962.00"
EWR - CLT,52529308460,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52529308460,https://www.airlines-manager.com/aircraft/show/104034462,1:45,5:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52529308461,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52529308461,https://www.airlines-manager.com/aircraft/show/99316501,2:45,6:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52543755605,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52543755605,https://www.airlines-manager.com/aircraft/show/104034464,10:00,14:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52551230623,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52551230623,https://www.airlines-manager.com/aircraft/show/104034463,13:00,17:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52556327818,EWR-BWI-BOS 1 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52556327818,https://www.airlines-manager.com/aircraft/show/104034462,15:45,19:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52561334691,EWR-BWI-BOS 4 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52561334691,https://www.airlines-manager.com/aircraft/show/99316501,16:45,20:59,216,"$189,369.00","$162,858.00"
EWR - CLT,52566418164,EWR-BWI-BOS 3 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52566418164,https://www.airlines-manager.com/aircraft/show/104034464,20:00,0:14,216,"$189,369.00","$162,858.00"
EWR - CLT,52570802948,EWR-BWI-BOS 2 E,A319-100,https://www.airlines-manager.com/network/showline/39273490,https://www.airlines-manager.com/network/showflight/52570802948,https://www.airlines-manager.com/aircraft/show/104034463,23:00,3:14,216,"$189,369.00","$162,858.00"
EWR - CMH,52529309024,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52529309024,https://www.airlines-manager.com/aircraft/show/104610409,4:30,8:29,310,"$222,825.00","$198,671.00"
EWR - CMH,52543755469,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52543755469,https://www.airlines-manager.com/aircraft/show/104610410,8:30,12:29,310,"$222,825.00","$198,671.00"
EWR - CMH,52551230617,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52551230617,https://www.airlines-manager.com/aircraft/show/96421247,13:00,16:59,112,"$103,771.00","$88,474.00"
EWR - CMH,52561334743,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52561334743,https://www.airlines-manager.com/aircraft/show/104610407,17:15,21:14,310,"$222,825.00","$198,671.00"
EWR - CMH,52573805893,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849199,https://www.airlines-manager.com/network/showflight/52573805893,https://www.airlines-manager.com/aircraft/show/104610408,23:15,3:14,310,"$222,825.00","$198,671.00"
EWR - COS,52529308350,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52529308350,https://www.airlines-manager.com/aircraft/show/108834808,1:30,9:59,310,"$533,242.00","$491,590.00"
EWR - COS,52529308351,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52529308351,https://www.airlines-manager.com/aircraft/show/108834811,3:30,11:59,310,"$533,242.00","$491,590.00"
EWR - COS,52551230598,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52551230598,https://www.airlines-manager.com/aircraft/show/108466265,13:00,21:29,112,"$250,491.00","$222,673.00"
EWR - COS,52561334659,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52561334659,https://www.airlines-manager.com/aircraft/show/108834810,16:30,0:59,310,"$533,242.00","$491,590.00"
EWR - COS,52566418027,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218134,https://www.airlines-manager.com/network/showflight/52566418027,https://www.airlines-manager.com/aircraft/show/108834809,18:30,2:59,310,"$533,242.00","$491,590.00"
EWR - CUN,52529308156,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52529308156,https://www.airlines-manager.com/aircraft/show/106581306,0:45,8:44,320,"$520,537.00","$472,761.00"
EWR - CUN,52529308157,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52529308157,https://www.airlines-manager.com/aircraft/show/106581305,2:15,10:14,320,"$520,537.00","$472,761.00"
EWR - CUN,52551230606,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52551230606,https://www.airlines-manager.com/aircraft/show/106581304,13:00,20:59,320,"$520,537.00","$472,761.00"
EWR - CUN,52556327710,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52556327710,https://www.airlines-manager.com/aircraft/show/106581307,14:30,22:29,320,"$520,537.00","$472,761.00"
EWR - CUN,52570802882,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524825,https://www.airlines-manager.com/network/showflight/52570802882,https://www.airlines-manager.com/aircraft/show/86238754,22:15,6:14,319,"$519,097.00","$471,373.00"
EWR - CVG,52529307998,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52529307998,https://www.airlines-manager.com/aircraft/show/104610409,0:15,4:29,310,"$269,645.00","$241,920.00"
EWR - CVG,52529307999,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52529307999,https://www.airlines-manager.com/aircraft/show/104610410,4:15,8:29,310,"$269,645.00","$241,920.00"
EWR - CVG,52543755431,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52543755431,https://www.airlines-manager.com/aircraft/show/96421247,8:15,12:29,112,"$127,354.00","$109,728.00"
EWR - CVG,52543755432,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52543755432,https://www.airlines-manager.com/aircraft/show/107576645,9:00,13:14,0,"$68,941.00","$50,019.00"
EWR - CVG,52551230618,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52551230618,https://www.airlines-manager.com/aircraft/show/104610407,13:00,17:14,310,"$269,645.00","$241,920.00"
EWR - CVG,52566418092,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849223,https://www.airlines-manager.com/network/showflight/52566418092,https://www.airlines-manager.com/aircraft/show/104610408,19:00,23:14,310,"$269,645.00","$241,920.00"
EWR - DEN,52529308498,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52529308498,https://www.airlines-manager.com/aircraft/show/86270785,1:45,9:59,310,"$528,791.00","$464,685.00"
EWR - DEN,52529308500,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52529308500,https://www.airlines-manager.com/aircraft/show/90452835,2:45,10:59,310,"$528,791.00","$464,685.00"
EWR - DEN,52543755591,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52543755591,https://www.airlines-manager.com/aircraft/show/87153196,10:00,18:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52543755592,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52543755592,https://www.airlines-manager.com/aircraft/show/86270783,11:00,19:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52556327855,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52556327855,https://www.airlines-manager.com/aircraft/show/90452833,16:00,0:14,310,"$528,791.00","$464,685.00"
EWR - DEN,52561334719,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/39261033,https://www.airlines-manager.com/network/showflight/52561334719,https://www.airlines-manager.com/aircraft/show/105223076,17:00,1:14,197,"$395,314.00","$344,035.00"
EWR - DFW,52529308698,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52529308698,https://www.airlines-manager.com/aircraft/show/90489724,2:30,9:59,320,"$473,148.00","$408,033.00"
EWR - DFW,52529308700,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52529308700,https://www.airlines-manager.com/aircraft/show/86238753,3:30,10:59,320,"$473,148.00","$408,033.00"
EWR - DFW,52543755622,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52543755622,https://www.airlines-manager.com/aircraft/show/90489725,10:00,17:29,320,"$473,148.00","$408,033.00"
EWR - DFW,52543755623,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52543755623,https://www.airlines-manager.com/aircraft/show/105222360,11:00,18:29,198,"$357,704.00","$312,102.00"
EWR - DFW,52551230560,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52551230560,https://www.airlines-manager.com/aircraft/show/86238752,12:15,19:44,320,"$473,148.00","$408,033.00"
EWR - DFW,52566418111,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39279932,https://www.airlines-manager.com/network/showflight/52566418111,https://www.airlines-manager.com/aircraft/show/90489726,19:15,2:44,319,"$470,446.00","$405,386.00"
EWR - DSM,52529308564,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52529308564,https://www.airlines-manager.com/aircraft/show/110113039,2:00,7:59,112,"$177,361.00","$157,321.00"
EWR - DSM,52529308566,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52529308566,https://www.airlines-manager.com/aircraft/show/110044466,4:15,10:14,310,"$375,015.00","$344,565.00"
EWR - DSM,52551230549,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52551230549,https://www.airlines-manager.com/aircraft/show/110044465,12:00,17:59,310,"$375,015.00","$344,565.00"
EWR - DSM,52551230550,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52551230550,https://www.airlines-manager.com/aircraft/show/110044464,13:45,19:44,310,"$375,015.00","$344,565.00"
EWR - DSM,52570802908,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540558,https://www.airlines-manager.com/network/showflight/52570802908,https://www.airlines-manager.com/aircraft/show/110044463,22:30,4:29,274,"$349,181.00","$319,731.00"
EWR - DTW,52529308871,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52529308871,https://www.airlines-manager.com/aircraft/show/92003921,3:30,7:29,320,"$225,975.00","$188,728.00"
EWR - DTW,52543755550,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52543755550,https://www.airlines-manager.com/aircraft/show/92003925,10:00,13:59,320,"$225,975.00","$188,728.00"
EWR - DTW,52551230666,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52551230666,https://www.airlines-manager.com/aircraft/show/92003924,13:30,17:29,320,"$225,975.00","$188,728.00"
EWR - DTW,52570802840,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52570802840,https://www.airlines-manager.com/aircraft/show/92003923,21:45,1:44,320,"$225,975.00","$188,728.00"
EWR - DTW,52570802841,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52570802841,https://www.airlines-manager.com/aircraft/show/92003922,22:15,2:14,320,"$225,975.00","$188,728.00"
EWR - DTW,52570802842,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42493159,https://www.airlines-manager.com/network/showflight/52570802842,https://www.airlines-manager.com/aircraft/show/103406580,22:45,2:44,0,"$77,012.00","$45,858.00"
EWR - DUB,52529308855,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52529308855,https://www.airlines-manager.com/aircraft/show/106721557,3:30,16:59,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,52529308859,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52529308859,https://www.airlines-manager.com/aircraft/show/106721559,5:15,18:44,598,"$1,654,162.00","$1,542,898.00"
EWR - DUB,52543755634,EWR 56C-6 F,787-10,https://www.airlines-manager.com/network/showline/46569727,https://www.airlines-manager.com/network/showflight/52543755634,https://www.airlines-manager.com/aircraft/show/106721561,10:30,23:59,597,"$1,649,845.00","$1,538,700.00"
EWR - EDI,52529309010,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52529309010,https://www.airlines-manager.com/aircraft/show/106721558,4:15,17:59,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,52529309014,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52529309014,https://www.airlines-manager.com/aircraft/show/106721560,6:00,19:44,598,"$1,639,705.00","$1,532,414.00"
EWR - EDI,52566418141,EWR 56C-5 F,787-10,https://www.airlines-manager.com/network/showline/46569734,https://www.airlines-manager.com/network/showflight/52566418141,https://www.airlines-manager.com/aircraft/show/106721560,19:45,9:29,597,"$1,637,172.00","$1,529,982.00"
EWR - ELP,52529308022,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52529308022,https://www.airlines-manager.com/aircraft/show/103365577,0:30,9:59,320,"$590,283.00","$540,501.00"
EWR - ELP,52529308023,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52529308023,https://www.airlines-manager.com/aircraft/show/110582847,2:30,11:59,198,"$444,766.00","$408,563.00"
EWR - ELP,52543755610,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52543755610,https://www.airlines-manager.com/aircraft/show/103365578,10:00,19:29,320,"$590,283.00","$540,501.00"
EWR - ELP,52551230505,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52551230505,https://www.airlines-manager.com/aircraft/show/103365575,12:00,21:29,320,"$590,283.00","$540,501.00"
EWR - ELP,52561334657,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45334027,https://www.airlines-manager.com/network/showflight/52561334657,https://www.airlines-manager.com/aircraft/show/103365576,16:15,1:44,320,"$590,283.00","$540,501.00"
EWR - FAR,52529308494,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52529308494,https://www.airlines-manager.com/aircraft/show/86270784,1:45,8:29,310,"$423,479.00","$390,512.00"
EWR - FAR,52529308496,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52529308496,https://www.airlines-manager.com/aircraft/show/86270786,5:00,11:44,310,"$423,479.00","$390,512.00"
EWR - FAR,52556327779,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52556327779,https://www.airlines-manager.com/aircraft/show/86270787,15:00,21:44,310,"$423,479.00","$390,512.00"
EWR - FAR,52566418101,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530160,https://www.airlines-manager.com/network/showflight/52566418101,https://www.airlines-manager.com/aircraft/show/90452834,19:15,1:59,310,"$423,479.00","$390,512.00"
EWR - FCA,52551230499,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52551230499,https://www.airlines-manager.com/aircraft/show/116042866,12:00,21:59,310,"$623,155.00","$578,453.00"
EWR - FCA,52556327798,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52556327798,https://www.airlines-manager.com/aircraft/show/116042863,15:15,1:14,310,"$623,155.00","$578,453.00"
EWR - FCA,52561334658,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52561334658,https://www.airlines-manager.com/aircraft/show/116042864,16:15,2:14,310,"$623,155.00","$578,453.00"
EWR - FCA,52570802855,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372873,https://www.airlines-manager.com/network/showflight/52570802855,https://www.airlines-manager.com/aircraft/show/116042865,22:00,7:59,310,"$623,155.00","$578,453.00"
EWR - FCO,52529308712,EWR 84A-2 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52529308712,https://www.airlines-manager.com/aircraft/show/94521252,2:30,19:59,852,"$2,899,967.00","$2,626,053.00"
EWR - FCO,52551230522,EWR 84A-3 B2,777-300,https://www.airlines-manager.com/network/showline/39865842,https://www.airlines-manager.com/network/showflight/52551230522,https://www.airlines-manager.com/aircraft/show/90656553,12:00,5:29,852,"$2,899,967.00","$2,626,053.00"
EWR - FLL,52529308329,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52529308329,https://www.airlines-manager.com/aircraft/show/107576645,1:15,7:29,0,"$102,826.00","$77,278.00"
EWR - FLL,52529308330,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52529308330,https://www.airlines-manager.com/aircraft/show/92003924,3:45,9:59,320,"$388,903.00","$348,890.00"
EWR - FLL,52529308331,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52529308331,https://www.airlines-manager.com/aircraft/show/92003922,5:45,11:59,320,"$388,903.00","$348,890.00"
EWR - FLL,52543755657,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52543755657,https://www.airlines-manager.com/aircraft/show/92003921,11:00,17:14,320,"$388,903.00","$348,890.00"
EWR - FLL,52551230548,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52551230548,https://www.airlines-manager.com/aircraft/show/92003923,12:00,18:14,320,"$388,903.00","$348,890.00"
EWR - FLL,52561334752,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503825,https://www.airlines-manager.com/network/showflight/52561334752,https://www.airlines-manager.com/aircraft/show/92003925,17:30,23:44,320,"$388,903.00","$348,890.00"
EWR - FRA,52529308737,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52529308737,https://www.airlines-manager.com/aircraft/show/94521253,2:45,18:44,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,52529308738,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52529308738,https://www.airlines-manager.com/aircraft/show/90656555,4:30,20:29,748,"$2,440,839.00","$2,175,935.00"
EWR - FRA,52529308739,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/39908990,https://www.airlines-manager.com/network/showflight/52529308739,https://www.airlines-manager.com/aircraft/show/94521251,6:15,22:14,747,"$2,197,926.00","$1,997,129.00"
EWR - FSD,52529308931,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52529308931,https://www.airlines-manager.com/aircraft/show/107161240,4:15,10:59,310,"$411,290.00","$378,809.00"
EWR - FSD,52543755505,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52543755505,https://www.airlines-manager.com/aircraft/show/86782214,9:00,15:44,112,"$193,855.00","$172,325.00"
EWR - FSD,52543755506,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52543755506,https://www.airlines-manager.com/aircraft/show/107161239,11:00,17:44,310,"$411,290.00","$378,809.00"
EWR - FSD,52556327797,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52556327797,https://www.airlines-manager.com/aircraft/show/107161241,15:15,21:59,310,"$411,290.00","$378,809.00"
EWR - FSD,52561334859,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719736,https://www.airlines-manager.com/network/showflight/52561334859,https://www.airlines-manager.com/aircraft/show/107161238,18:15,0:59,278,"$385,646.00","$354,199.00"
EWR - GRR,52543755442,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52543755442,https://www.airlines-manager.com/aircraft/show/116042862,8:30,12:59,310,"$276,965.00","$252,023.00"
EWR - GRR,52556327667,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52556327667,https://www.airlines-manager.com/aircraft/show/116042859,14:00,18:29,310,"$276,965.00","$252,023.00"
EWR - GRR,52566418120,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52566418120,https://www.airlines-manager.com/aircraft/show/116042860,19:30,23:59,310,"$276,965.00","$252,023.00"
EWR - GRR,52566418121,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372675,https://www.airlines-manager.com/network/showflight/52566418121,https://www.airlines-manager.com/aircraft/show/116042861,20:45,1:14,309,"$275,335.00","$250,418.00"
EWR - IAH,52529308883,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52529308883,https://www.airlines-manager.com/aircraft/show/105859512,3:30,10:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52529308884,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52529308884,https://www.airlines-manager.com/aircraft/show/105859514,4:30,11:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52543755367,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52543755367,https://www.airlines-manager.com/aircraft/show/105859510,7:30,14:59,338,"$517,352.00","$469,490.00"
EWR - IAH,52543755368,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52543755368,https://www.airlines-manager.com/aircraft/show/105859511,11:00,18:29,338,"$517,352.00","$469,490.00"
EWR - IAH,52551230528,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52551230528,https://www.airlines-manager.com/aircraft/show/105859513,12:00,19:29,338,"$517,352.00","$469,490.00"
EWR - IAH,52566418060,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39422884,https://www.airlines-manager.com/network/showflight/52566418060,https://www.airlines-manager.com/aircraft/show/105864236,18:45,2:14,112,"$225,487.00","$193,280.00"
EWR - ICT,52529308181,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52529308181,https://www.airlines-manager.com/aircraft/show/108834810,1:00,7:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52529308182,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52529308182,https://www.airlines-manager.com/aircraft/show/108834809,3:00,9:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52543755663,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52543755663,https://www.airlines-manager.com/aircraft/show/108834808,11:00,17:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52551230597,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52551230597,https://www.airlines-manager.com/aircraft/show/108834811,13:00,19:59,310,"$441,036.00","$406,336.00"
EWR - ICT,52570802822,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218155,https://www.airlines-manager.com/network/showflight/52570802822,https://www.airlines-manager.com/aircraft/show/108466265,21:30,4:29,112,"$208,775.00","$185,755.00"
EWR - IND,52529308051,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52529308051,https://www.airlines-manager.com/aircraft/show/88494376,0:30,4:59,320,"$294,147.00","$262,579.00"
EWR - IND,52529308052,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52529308052,https://www.airlines-manager.com/aircraft/show/88494377,4:15,8:44,320,"$294,147.00","$262,579.00"
EWR - IND,52543755677,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52543755677,https://www.airlines-manager.com/aircraft/show/88494375,11:00,15:29,320,"$294,147.00","$262,579.00"
EWR - IND,52561334755,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52561334755,https://www.airlines-manager.com/aircraft/show/106104450,17:30,21:59,112,"$140,406.00","$122,751.00"
EWR - IND,52566418225,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46255763,https://www.airlines-manager.com/network/showflight/52566418225,https://www.airlines-manager.com/aircraft/show/105731236,20:45,1:14,320,"$294,147.00","$262,579.00"
EWR - JAN,52529308579,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52529308579,https://www.airlines-manager.com/aircraft/show/90452834,2:00,8:14,310,"$387,602.00","$356,921.00"
EWR - JAN,52543755447,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52543755447,https://www.airlines-manager.com/aircraft/show/86270784,8:30,14:44,310,"$387,602.00","$356,921.00"
EWR - JAN,52551230535,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52551230535,https://www.airlines-manager.com/aircraft/show/86270786,12:00,18:14,310,"$387,602.00","$356,921.00"
EWR - JAN,52570802834,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530163,https://www.airlines-manager.com/network/showflight/52570802834,https://www.airlines-manager.com/aircraft/show/86270787,21:45,3:59,310,"$387,602.00","$356,921.00"
EWR - JAX,52529308679,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52529308679,https://www.airlines-manager.com/aircraft/show/104610407,2:15,7:29,310,"$336,340.00","$307,317.00"
EWR - JAX,52543755433,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52543755433,https://www.airlines-manager.com/aircraft/show/104610408,8:15,13:29,310,"$336,340.00","$307,317.00"
EWR - JAX,52556327626,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52556327626,https://www.airlines-manager.com/aircraft/show/104610409,14:00,19:14,310,"$336,340.00","$307,317.00"
EWR - JAX,52561334788,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52561334788,https://www.airlines-manager.com/aircraft/show/104610410,18:00,23:14,310,"$336,340.00","$307,317.00"
EWR - JAX,52570802865,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849204,https://www.airlines-manager.com/network/showflight/52570802865,https://www.airlines-manager.com/aircraft/show/96421247,22:00,3:14,112,"$159,669.00","$140,823.00"
EWR - KEF,52561334717,EWR 56C-2 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52561334717,https://www.airlines-manager.com/aircraft/show/106721557,17:00,4:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,52561334718,EWR 56C-3 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52561334718,https://www.airlines-manager.com/aircraft/show/106721558,18:00,5:14,598,"$1,336,722.00","$1,247,711.00"
EWR - KEF,52566418039,EWR 56C-4 F,787-10,https://www.airlines-manager.com/network/showline/46569722,https://www.airlines-manager.com/network/showflight/52566418039,https://www.airlines-manager.com/aircraft/show/106721559,18:45,5:59,598,"$1,336,722.00","$1,247,711.00"
EWR - LAS,52529307889,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52529307889,https://www.airlines-manager.com/aircraft/show/105859511,0:15,10:59,338,"$734,373.00","$670,209.00"
EWR - LAS,52529307890,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52529307890,https://www.airlines-manager.com/aircraft/show/105859513,1:15,11:59,338,"$734,373.00","$670,209.00"
EWR - LAS,52529307891,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52529307891,https://www.airlines-manager.com/aircraft/show/105864236,2:15,12:59,112,"$317,303.00","$273,258.00"
EWR - LAS,52551230527,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52551230527,https://www.airlines-manager.com/aircraft/show/105859514,12:00,22:44,338,"$734,373.00","$670,209.00"
EWR - LAS,52556327776,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52556327776,https://www.airlines-manager.com/aircraft/show/105859510,15:00,1:44,338,"$734,373.00","$670,209.00"
EWR - LAS,52561334682,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/39279941,https://www.airlines-manager.com/network/showflight/52561334682,https://www.airlines-manager.com/aircraft/show/105859512,16:45,3:29,338,"$734,373.00","$670,209.00"
EWR - LAX,52529307858,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52529307858,https://www.airlines-manager.com/aircraft/show/89233030,0:00,11:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52529307859,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52529307859,https://www.airlines-manager.com/aircraft/show/89233027,2:00,13:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52551230567,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52551230567,https://www.airlines-manager.com/aircraft/show/83716137,12:30,23:59,400,"$933,265.00","$842,042.00"
EWR - LAX,52556327631,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52556327631,https://www.airlines-manager.com/aircraft/show/89233028,14:00,1:29,400,"$933,265.00","$842,042.00"
EWR - LAX,52556327632,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254373,https://www.airlines-manager.com/network/showflight/52556327632,https://www.airlines-manager.com/aircraft/show/89233029,15:30,2:59,400,"$933,265.00","$842,042.00"
EWR - LHR,52529308586,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52529308586,https://www.airlines-manager.com/aircraft/show/106813007,2:15,16:44,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,52551230569,EWR 56A-4 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52551230569,https://www.airlines-manager.com/aircraft/show/106813010,12:30,2:59,748,"$2,219,977.00","$1,968,374.00"
EWR - LHR,52561334855,EWR 56A-5 B1,777-300,https://www.airlines-manager.com/network/showline/40098745,https://www.airlines-manager.com/network/showflight/52561334855,https://www.airlines-manager.com/aircraft/show/106813011,18:15,8:44,747,"$1,999,553.00","$1,805,369.00"
EWR - LIS,52529309070,EWR 84A-4 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52529309070,https://www.airlines-manager.com/aircraft/show/90656551,5:30,19:44,852,"$2,328,969.00","$2,120,634.00"
EWR - LIS,52551230559,EWR 84A-1 B2,777-300,https://www.airlines-manager.com/network/showline/46601012,https://www.airlines-manager.com/network/showflight/52551230559,https://www.airlines-manager.com/aircraft/show/90656554,12:15,2:29,852,"$2,328,969.00","$2,120,634.00"
EWR - LIT,52543755448,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52543755448,https://www.airlines-manager.com/aircraft/show/86270787,8:30,14:44,310,"$393,314.00","$362,357.00"
EWR - LIT,52551230585,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52551230585,https://www.airlines-manager.com/aircraft/show/90452834,13:00,19:14,310,"$393,314.00","$362,357.00"
EWR - LIT,52566418123,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52566418123,https://www.airlines-manager.com/aircraft/show/86270784,19:30,1:44,310,"$393,314.00","$362,357.00"
EWR - LIT,52570802933,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530155,https://www.airlines-manager.com/network/showflight/52570802933,https://www.airlines-manager.com/aircraft/show/86270786,22:45,4:59,310,"$393,314.00","$362,357.00"
EWR - MAD,52529307861,EWR 56B-7 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52529307861,https://www.airlines-manager.com/aircraft/show/89124072,0:00,14:59,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,52566418210,EWR 56B-3 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52566418210,https://www.airlines-manager.com/aircraft/show/90656555,20:30,11:29,748,"$2,289,844.00","$2,036,885.00"
EWR - MAD,52570802877,EWR 56B-1 B1,777-300,https://www.airlines-manager.com/network/showline/42007979,https://www.airlines-manager.com/network/showflight/52570802877,https://www.airlines-manager.com/aircraft/show/94521251,22:15,13:14,747,"$2,064,416.00","$1,871,147.00"
EWR - MCI,52529308899,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52529308899,https://www.airlines-manager.com/aircraft/show/103365578,3:45,9:59,320,"$393,015.00","$354,039.00"
EWR - MCI,52529308900,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52529308900,https://www.airlines-manager.com/aircraft/show/103365575,5:45,11:59,320,"$393,015.00","$354,039.00"
EWR - MCI,52543755606,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52543755606,https://www.airlines-manager.com/aircraft/show/103365576,10:00,16:14,320,"$393,015.00","$354,039.00"
EWR - MCI,52551230659,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52551230659,https://www.airlines-manager.com/aircraft/show/107576645,13:15,19:29,0,"$103,001.00","$77,854.00"
EWR - MCI,52561334860,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52561334860,https://www.airlines-manager.com/aircraft/show/103365577,18:15,0:29,320,"$393,015.00","$354,039.00"
EWR - MCI,52566418191,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356715,https://www.airlines-manager.com/network/showflight/52566418191,https://www.airlines-manager.com/aircraft/show/110582847,20:15,2:29,198,"$297,509.00","$269,782.00"
EWR - MCO,52529308459,EWR-IAH-LAS 1,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52529308459,https://www.airlines-manager.com/aircraft/show/105859510,1:45,7:29,338,"$389,555.00","$350,260.00"
EWR - MCO,52543755649,EWR-IAH-LAS 3,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52543755649,https://www.airlines-manager.com/aircraft/show/105859512,11:00,16:44,338,"$389,555.00","$350,260.00"
EWR - MCO,52551230610,EWR-IAH-LAS 6,ERJ-175,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52551230610,https://www.airlines-manager.com/aircraft/show/105864236,13:00,18:44,112,"$170,716.00","$144,798.00"
EWR - MCO,52566418021,EWR-IAH-LAS 2,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52566418021,https://www.airlines-manager.com/aircraft/show/105859511,18:30,0:14,338,"$389,555.00","$350,260.00"
EWR - MCO,52566418022,EWR-IAH-LAS 4,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52566418022,https://www.airlines-manager.com/aircraft/show/105859513,19:30,1:14,338,"$389,555.00","$350,260.00"
EWR - MCO,52570802935,EWR-IAH-LAS 5,A321neo,https://www.airlines-manager.com/network/showline/40395708,https://www.airlines-manager.com/network/showflight/52570802935,https://www.airlines-manager.com/aircraft/show/105859514,22:45,4:29,335,"$387,503.00","$348,272.00"
EWR - MEM,52529308315,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52529308315,https://www.airlines-manager.com/aircraft/show/99920619,1:15,6:59,320,"$361,610.00","$324,552.00"
EWR - MEM,52529308316,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52529308316,https://www.airlines-manager.com/aircraft/show/99920620,3:45,9:29,320,"$361,610.00","$324,552.00"
EWR - MEM,52543755632,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52543755632,https://www.airlines-manager.com/aircraft/show/99920621,10:15,15:59,320,"$361,610.00","$324,552.00"
EWR - MEM,52566418124,EWR CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52566418124,https://www.airlines-manager.com/aircraft/show/107576645,19:30,1:14,0,"$96,225.00","$72,790.00"
EWR - MEM,52566418125,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52566418125,https://www.airlines-manager.com/aircraft/show/100096560,20:15,1:59,198,"$274,216.00","$248,000.00"
EWR - MEM,52570802833,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056241,https://www.airlines-manager.com/network/showflight/52570802833,https://www.airlines-manager.com/aircraft/show/99920622,21:30,3:14,320,"$361,610.00","$324,552.00"
EWR - MEX,52529308509,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52529308509,https://www.airlines-manager.com/aircraft/show/92003923,1:45,11:59,320,"$638,640.00","$575,040.00"
EWR - MEX,52543755577,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52543755577,https://www.airlines-manager.com/aircraft/show/104258433,10:00,20:14,216,"$486,277.00","$439,772.00"
EWR - MEX,52551230542,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52551230542,https://www.airlines-manager.com/aircraft/show/92003922,12:00,22:14,320,"$638,640.00","$575,040.00"
EWR - MEX,52561334741,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52561334741,https://www.airlines-manager.com/aircraft/show/92003921,17:15,3:29,320,"$638,640.00","$575,040.00"
EWR - MEX,52561334742,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52561334742,https://www.airlines-manager.com/aircraft/show/92003924,17:30,3:44,320,"$638,640.00","$575,040.00"
EWR - MEX,52566418196,EWR-DTW-YYZ 6 E,A319-100,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52566418196,https://www.airlines-manager.com/aircraft/show/104258433,20:15,6:29,216,"$486,277.00","$439,772.00"
EWR - MEX,52573805941,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42538129,https://www.airlines-manager.com/network/showflight/52573805941,https://www.airlines-manager.com/aircraft/show/92003925,23:45,9:59,296,"$595,396.00","$533,488.00"
EWR - MHT,52529308893,EWR-FCA-CID 1,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52529308893,https://www.airlines-manager.com/aircraft/show/116042866,3:45,6:44,310,"$126,397.00","$107,260.00"
EWR - MHT,52543755492,EWR-FCA-CID 4,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52543755492,https://www.airlines-manager.com/aircraft/show/116042863,9:00,11:59,310,"$126,397.00","$107,260.00"
EWR - MHT,52543755493,EWR-FCA-CID 3,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52543755493,https://www.airlines-manager.com/aircraft/show/116042864,10:00,12:59,310,"$126,397.00","$107,260.00"
EWR - MHT,52543755494,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52543755494,https://www.airlines-manager.com/aircraft/show/98887257,11:00,13:59,112,"$56,334.00","$44,487.00"
EWR - MHT,52556327810,EWR-FCA-CID 2,A321-200,https://www.airlines-manager.com/network/showline/49372865,https://www.airlines-manager.com/network/showflight/52556327810,https://www.airlines-manager.com/aircraft/show/116042865,15:45,18:44,310,"$126,397.00","$107,260.00"
EWR - MIA,52529308708,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52529308708,https://www.airlines-manager.com/aircraft/show/113251309,2:30,8:44,338,"$429,739.00","$386,653.00"
EWR - MIA,52529308710,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52529308710,https://www.airlines-manager.com/aircraft/show/113251305,4:00,10:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52543755560,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52543755560,https://www.airlines-manager.com/aircraft/show/113251306,10:00,16:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52543755561,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52543755561,https://www.airlines-manager.com/aircraft/show/113251308,11:00,17:14,338,"$429,739.00","$386,653.00"
EWR - MIA,52561334670,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39256188,https://www.airlines-manager.com/network/showflight/52561334670,https://www.airlines-manager.com/aircraft/show/113251307,16:30,22:44,338,"$429,739.00","$386,653.00"
EWR - MKE,52529308838,EWR-BNA-JAX 5,ERJ-175,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52529308838,https://www.airlines-manager.com/aircraft/show/96421247,3:15,8:14,112,"$149,842.00","$131,850.00"
EWR - MKE,52543755374,EWR-BNA-JAX 4,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52543755374,https://www.airlines-manager.com/aircraft/show/104610407,7:30,12:29,310,"$315,444.00","$287,559.00"
EWR - MKE,52556327627,EWR-BNA-JAX 3,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52556327627,https://www.airlines-manager.com/aircraft/show/104610408,14:00,18:59,310,"$315,444.00","$287,559.00"
EWR - MKE,52566418095,EWR-BNA-JAX 2,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52566418095,https://www.airlines-manager.com/aircraft/show/104610409,19:15,0:14,310,"$315,444.00","$287,559.00"
EWR - MKE,52573805901,EWR-BNA-JAX 1,A321-200,https://www.airlines-manager.com/network/showline/45849213,https://www.airlines-manager.com/network/showflight/52573805901,https://www.airlines-manager.com/aircraft/show/104610410,23:15,4:14,310,"$315,444.00","$287,559.00"
EWR - MSN,52529308683,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52529308683,https://www.airlines-manager.com/aircraft/show/116042859,2:30,7:44,310,"$330,285.00","$303,041.00"
EWR - MSN,52543755486,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52543755486,https://www.airlines-manager.com/aircraft/show/116042860,8:45,13:59,310,"$330,285.00","$303,041.00"
EWR - MSN,52543755487,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52543755487,https://www.airlines-manager.com/aircraft/show/116042861,10:00,15:14,310,"$330,285.00","$303,041.00"
EWR - MSN,52570802763,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372678,https://www.airlines-manager.com/network/showflight/52570802763,https://www.airlines-manager.com/aircraft/show/116042862,21:00,2:14,310,"$330,285.00","$303,041.00"
EWR - MSO,52529308180,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52529308180,https://www.airlines-manager.com/aircraft/show/107161238,1:00,10:59,310,"$615,568.00","$570,621.00"
EWR - MSO,52543755688,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52543755688,https://www.airlines-manager.com/aircraft/show/107161240,11:00,20:59,310,"$615,568.00","$570,621.00"
EWR - MSO,52556327814,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52556327814,https://www.airlines-manager.com/aircraft/show/86782214,15:45,1:44,112,"$289,117.00","$258,634.00"
EWR - MSO,52561334783,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52561334783,https://www.airlines-manager.com/aircraft/show/107161239,17:45,3:44,310,"$615,568.00","$570,621.00"
EWR - MSO,52570802867,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719716,https://www.airlines-manager.com/network/showflight/52570802867,https://www.airlines-manager.com/aircraft/show/107161241,22:00,7:59,310,"$615,568.00","$570,621.00"
EWR - MSP,52529309049,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52529309049,https://www.airlines-manager.com/aircraft/show/86270783,5:00,10:59,310,"$374,508.00","$335,273.00"
EWR - MSP,52543755544,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52543755544,https://www.airlines-manager.com/aircraft/show/90452833,10:00,15:59,310,"$374,508.00","$335,273.00"
EWR - MSP,52543755545,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52543755545,https://www.airlines-manager.com/aircraft/show/105223076,11:00,16:59,198,"$283,860.00","$252,429.00"
EWR - MSP,52561334861,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52561334861,https://www.airlines-manager.com/aircraft/show/87153196,18:15,0:14,310,"$374,508.00","$335,273.00"
EWR - MSP,52566418136,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52566418136,https://www.airlines-manager.com/aircraft/show/86270785,19:45,1:44,310,"$374,508.00","$335,273.00"
EWR - MSP,52566418137,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/40395806,https://www.airlines-manager.com/network/showflight/52566418137,https://www.airlines-manager.com/aircraft/show/90452835,20:45,2:44,310,"$374,508.00","$335,273.00"
EWR - MSY,52529308840,EWR-ABQ-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52529308840,https://www.airlines-manager.com/aircraft/show/90717079,3:15,9:59,310,"$414,442.00","$379,691.00"
EWR - MSY,52543755614,EWR-ABQ-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52543755614,https://www.airlines-manager.com/aircraft/show/90717077,10:00,16:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52543755615,EWR-ABQ-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52543755615,https://www.airlines-manager.com/aircraft/show/90717076,11:00,17:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52561334843,EWR-ABQ-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52561334843,https://www.airlines-manager.com/aircraft/show/90717078,18:00,0:44,310,"$414,442.00","$379,691.00"
EWR - MSY,52566418177,EWR-ABQ-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/43857268,https://www.airlines-manager.com/network/showflight/52566418177,https://www.airlines-manager.com/aircraft/show/95950199,20:00,2:44,310,"$414,442.00","$379,691.00"
EWR - MUC,52529307860,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52529307860,https://www.airlines-manager.com/aircraft/show/106721562,0:00,16:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,52543755684,EWR 56C-1 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52543755684,https://www.airlines-manager.com/aircraft/show/106721556,11:00,3:29,598,"$2,039,119.00","$1,889,048.00"
EWR - MUC,52566418026,EWR 56C-7 F,787-10,https://www.airlines-manager.com/network/showline/46569718,https://www.airlines-manager.com/network/showflight/52566418026,https://www.airlines-manager.com/aircraft/show/106721562,18:30,10:59,597,"$2,036,880.00","$1,886,910.00"
EWR - NAS,52529309061,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52529309061,https://www.airlines-manager.com/aircraft/show/98379319,5:15,11:44,310,"$395,325.00","$362,324.00"
EWR - NAS,52551230638,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52551230638,https://www.airlines-manager.com/aircraft/show/98379317,13:00,19:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52561334842,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52561334842,https://www.airlines-manager.com/aircraft/show/98379316,18:00,0:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52566418067,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52566418067,https://www.airlines-manager.com/aircraft/show/98379318,19:00,1:29,310,"$395,325.00","$362,324.00"
EWR - NAS,52570802755,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584392,https://www.airlines-manager.com/network/showflight/52570802755,https://www.airlines-manager.com/aircraft/show/98379315,21:00,3:29,289,"$371,816.00","$339,605.00"
EWR - NRT,52529307883,EWR 56A-7 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52529307883,https://www.airlines-manager.com/aircraft/show/106813013,0:00,2:14,748,"$3,981,529.00","$3,582,827.00"
EWR - NRT,52543755627,EWR 56A-3 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52543755627,https://www.airlines-manager.com/aircraft/show/106813009,10:15,12:29,748,"$3,955,749.00","$3,566,130.00"
EWR - NRT,52561334684,EWR 56A-1 B1,777-300,https://www.airlines-manager.com/network/showline/46601007,https://www.airlines-manager.com/network/showflight/52561334684,https://www.airlines-manager.com/aircraft/show/106813007,16:45,18:59,746,"$3,546,674.00","$3,262,133.00"
EWR - OAK,52529308172,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52529308172,https://www.airlines-manager.com/aircraft/show/104717239,1:00,12:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52543755603,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52543755603,https://www.airlines-manager.com/aircraft/show/104717243,10:00,21:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52551230498,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52551230498,https://www.airlines-manager.com/aircraft/show/104717242,12:00,23:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52556327628,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52556327628,https://www.airlines-manager.com/aircraft/show/104717241,14:00,1:59,310,"$735,944.00","$680,370.00"
EWR - OAK,52570802909,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/39907187,https://www.airlines-manager.com/network/showflight/52570802909,https://www.airlines-manager.com/aircraft/show/104717240,22:30,10:29,309,"$734,500.00","$678,996.00"
EWR - OKC,52529308485,EWR-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52529308485,https://www.airlines-manager.com/aircraft/show/86782214,1:45,8:59,112,"$217,529.00","$193,783.00"
EWR - OKC,52529308487,EWR-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52529308487,https://www.airlines-manager.com/aircraft/show/107161239,3:45,10:59,310,"$460,889.00","$425,160.00"
EWR - OKC,52543755406,EWR-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52543755406,https://www.airlines-manager.com/aircraft/show/107161241,8:00,15:14,310,"$460,889.00","$425,160.00"
EWR - OKC,52543755407,EWR-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52543755407,https://www.airlines-manager.com/aircraft/show/107161238,11:00,18:14,310,"$460,889.00","$425,160.00"
EWR - OKC,52570802780,EWR-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/46719742,https://www.airlines-manager.com/network/showflight/52570802780,https://www.airlines-manager.com/aircraft/show/107161240,21:00,4:14,310,"$460,889.00","$425,160.00"
EWR - OMA,52529308716,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52529308716,https://www.airlines-manager.com/aircraft/show/104418460,2:30,8:59,310,"$401,779.00","$368,804.00"
EWR - OMA,52543755369,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52543755369,https://www.airlines-manager.com/aircraft/show/104418463,7:30,13:59,310,"$401,779.00","$368,804.00"
EWR - OMA,52543755370,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52543755370,https://www.airlines-manager.com/aircraft/show/104418462,10:00,16:29,310,"$401,779.00","$368,804.00"
EWR - OMA,52561334723,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52561334723,https://www.airlines-manager.com/aircraft/show/104418461,17:00,23:29,310,"$401,779.00","$368,804.00"
EWR - OMA,52566418075,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805662,https://www.airlines-manager.com/network/showflight/52566418075,https://www.airlines-manager.com/aircraft/show/110582846,19:00,1:29,193,"$300,131.00","$273,880.00"
EWR - ONT,52529307851,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52529307851,https://www.airlines-manager.com/aircraft/show/94889153,0:00,11:29,320,"$702,968.00","$644,264.00"
EWR - ONT,52529307852,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52529307852,https://www.airlines-manager.com/aircraft/show/94889154,2:00,13:29,320,"$702,968.00","$644,264.00"
EWR - ONT,52551230480,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52551230480,https://www.airlines-manager.com/aircraft/show/94889150,11:45,23:14,320,"$702,968.00","$644,264.00"
EWR - ONT,52551230481,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52551230481,https://www.airlines-manager.com/aircraft/show/94889151,13:15,0:44,320,"$702,968.00","$644,264.00"
EWR - ONT,52556327722,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619155,https://www.airlines-manager.com/network/showflight/52556327722,https://www.airlines-manager.com/aircraft/show/94889152,14:45,2:14,298,"$673,078.00","$615,797.00"
EWR - ORD,52529309044,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52529309044,https://www.airlines-manager.com/aircraft/show/113251306,5:00,9:59,338,"$340,392.00","$293,357.00"
EWR - ORD,52543755629,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52543755629,https://www.airlines-manager.com/aircraft/show/113251305,10:15,15:14,338,"$340,392.00","$293,357.00"
EWR - ORD,52551230479,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52551230479,https://www.airlines-manager.com/aircraft/show/113251307,11:30,16:29,338,"$340,392.00","$293,357.00"
EWR - ORD,52561334748,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52561334748,https://www.airlines-manager.com/aircraft/show/113251308,17:15,22:14,338,"$340,392.00","$293,357.00"
EWR - ORD,52570802815,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39259370,https://www.airlines-manager.com/network/showflight/52570802815,https://www.airlines-manager.com/aircraft/show/113251309,21:30,2:29,338,"$340,392.00","$293,357.00"
EWR - ORF,52529308612,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52529308612,https://www.airlines-manager.com/aircraft/show/88494375,2:15,5:29,320,"$153,141.00","$129,591.00"
EWR - ORF,52543755672,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52543755672,https://www.airlines-manager.com/aircraft/show/106104450,11:00,14:14,112,"$70,253.00","$57,651.00"
EWR - ORF,52556327704,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52556327704,https://www.airlines-manager.com/aircraft/show/105731236,14:15,17:29,320,"$153,141.00","$129,591.00"
EWR - ORF,52561334787,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52561334787,https://www.airlines-manager.com/aircraft/show/88494376,18:00,21:14,320,"$153,141.00","$129,591.00"
EWR - ORF,52570802839,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46250219,https://www.airlines-manager.com/network/showflight/52570802839,https://www.airlines-manager.com/aircraft/show/88494377,21:45,0:59,320,"$153,141.00","$129,591.00"
EWR - PBI,52529308364,EWR-BOI-PBI 4,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52529308364,https://www.airlines-manager.com/aircraft/show/104418463,1:30,7:29,310,"$379,298.00","$346,857.00"
EWR - PBI,52529308365,EWR-BOI-PBI 3,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52529308365,https://www.airlines-manager.com/aircraft/show/104418462,3:00,8:59,310,"$379,298.00","$346,857.00"
EWR - PBI,52543755666,EWR-BOI-PBI 2,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52543755666,https://www.airlines-manager.com/aircraft/show/104418461,11:00,16:59,310,"$379,298.00","$346,857.00"
EWR - PBI,52551230593,EWR-BOI-PBI 5 B,A319-100,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52551230593,https://www.airlines-manager.com/aircraft/show/110582846,13:00,18:59,198,"$287,127.00","$261,131.00"
EWR - PBI,52566418205,EWR-BOI-PBI 1,A321-200,https://www.airlines-manager.com/network/showline/45805644,https://www.airlines-manager.com/network/showflight/52566418205,https://www.airlines-manager.com/aircraft/show/104418460,20:30,2:29,310,"$379,298.00","$346,857.00"
EWR - PDX,52529307847,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52529307847,https://www.airlines-manager.com/aircraft/show/113595213,0:00,11:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52529307848,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52529307848,https://www.airlines-manager.com/aircraft/show/113595214,2:00,13:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52529307849,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52529307849,https://www.airlines-manager.com/aircraft/show/113595215,5:00,16:29,338,"$757,644.00","$704,937.00"
EWR - PDX,52529307850,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52529307850,https://www.airlines-manager.com/aircraft/show/99219630,6:30,17:59,198,"$526,353.00","$481,656.00"
EWR - PDX,52543755631,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52543755631,https://www.airlines-manager.com/aircraft/show/113595211,10:15,21:44,338,"$757,644.00","$704,937.00"
EWR - PDX,52551230561,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39259269,https://www.airlines-manager.com/network/showflight/52551230561,https://www.airlines-manager.com/aircraft/show/113595212,12:15,23:44,304,"$711,080.00","$660,256.00"
EWR - PHX,52529307814,EWR-PHX-PDX 1,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52529307814,https://www.airlines-manager.com/aircraft/show/113595211,0:00,10:14,338,"$703,984.00","$646,614.00"
EWR - PHX,52529307815,EWR-PHX-PDX 2,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52529307815,https://www.airlines-manager.com/aircraft/show/113595212,2:00,12:14,338,"$703,984.00","$646,614.00"
EWR - PHX,52551230475,EWR-PHX-PDX 3,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52551230475,https://www.airlines-manager.com/aircraft/show/113595213,11:30,21:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52551230476,EWR-PHX-PDX 4,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52551230476,https://www.airlines-manager.com/aircraft/show/113595214,13:30,23:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52561334665,EWR-PHX-PDX 5,A321neo,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52561334665,https://www.airlines-manager.com/aircraft/show/113595215,16:30,2:44,338,"$703,984.00","$646,614.00"
EWR - PHX,52561334666,EWR-PHX-PDX 6 B,A319-100,https://www.airlines-manager.com/network/showline/39338280,https://www.airlines-manager.com/network/showflight/52561334666,https://www.airlines-manager.com/aircraft/show/99219630,18:00,4:29,198,"$489,590.00","$441,475.00"
EWR - PIT,52529308932,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52529308932,https://www.airlines-manager.com/aircraft/show/98887257,4:15,7:29,112,"$77,390.00","$63,030.00"
EWR - PIT,52529308933,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52529308933,https://www.airlines-manager.com/aircraft/show/115400546,6:30,9:44,338,"$182,175.00","$159,563.00"
EWR - PIT,52543755575,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52543755575,https://www.airlines-manager.com/aircraft/show/115400547,10:00,13:14,338,"$182,175.00","$159,563.00"
EWR - PIT,52551230579,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52551230579,https://www.airlines-manager.com/aircraft/show/115400545,13:00,16:14,338,"$182,175.00","$159,563.00"
EWR - PIT,52556327804,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52556327804,https://www.airlines-manager.com/aircraft/show/115400548,15:30,18:44,338,"$182,175.00","$159,563.00"
EWR - PIT,52566418130,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44778351,https://www.airlines-manager.com/network/showflight/52566418130,https://www.airlines-manager.com/aircraft/show/98887257,19:30,22:44,112,"$77,390.00","$63,030.00"
EWR - PVD,52529308349,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52529308349,https://www.airlines-manager.com/aircraft/show/110044466,1:30,4:14,310,"$98,896.00","$81,261.00"
EWR - PVD,52543755525,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52543755525,https://www.airlines-manager.com/aircraft/show/110044465,9:15,11:59,310,"$98,896.00","$81,261.00"
EWR - PVD,52543755526,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52543755526,https://www.airlines-manager.com/aircraft/show/110044464,11:00,13:44,310,"$98,896.00","$81,261.00"
EWR - PVD,52566418149,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52566418149,https://www.airlines-manager.com/aircraft/show/110044463,19:45,22:29,310,"$98,896.00","$81,261.00"
EWR - PVD,52573805906,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540547,https://www.airlines-manager.com/network/showflight/52573805906,https://www.airlines-manager.com/aircraft/show/110113039,23:15,1:59,112,"$42,444.00","$31,586.00"
EWR - PWM,52529309031,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52529309031,https://www.airlines-manager.com/aircraft/show/110044463,4:30,7:44,310,"$154,002.00","$134,952.00"
EWR - PWM,52543755482,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52543755482,https://www.airlines-manager.com/aircraft/show/110113039,8:45,11:59,112,"$69,981.00","$58,055.00"
EWR - PWM,52543755483,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52543755483,https://www.airlines-manager.com/aircraft/show/110044466,11:00,14:14,310,"$154,002.00","$134,952.00"
EWR - PWM,52561334791,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52561334791,https://www.airlines-manager.com/aircraft/show/110044465,18:00,21:14,310,"$154,002.00","$134,952.00"
EWR - PWM,52566418151,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540554,https://www.airlines-manager.com/network/showflight/52566418151,https://www.airlines-manager.com/aircraft/show/110044464,19:45,22:59,299,"$150,809.00","$131,844.00"
EWR - RAP,52529307832,EWR-RAP-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52529307832,https://www.airlines-manager.com/aircraft/show/116042860,0:00,7:59,310,"$495,214.00","$458,198.00"
EWR - RAP,52529307833,EWR-RAP-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52529307833,https://www.airlines-manager.com/aircraft/show/116042861,1:15,9:14,310,"$495,214.00","$458,198.00"
EWR - RAP,52551230578,EWR-RAP-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52551230578,https://www.airlines-manager.com/aircraft/show/116042862,13:00,20:59,310,"$495,214.00","$458,198.00"
EWR - RAP,52566418017,EWR-RAP-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49372682,https://www.airlines-manager.com/network/showflight/52566418017,https://www.airlines-manager.com/aircraft/show/116042859,18:30,2:29,310,"$495,214.00","$458,198.00"
EWR - RDU,52529308309,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52529308309,https://www.airlines-manager.com/aircraft/show/105731236,1:15,4:59,320,"$200,541.00","$172,573.00"
EWR - RDU,52529308310,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52529308310,https://www.airlines-manager.com/aircraft/show/88494376,5:00,8:44,320,"$200,541.00","$172,573.00"
EWR - RDU,52543755676,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52543755676,https://www.airlines-manager.com/aircraft/show/88494377,11:00,14:44,320,"$200,541.00","$172,573.00"
EWR - RDU,52556327805,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52556327805,https://www.airlines-manager.com/aircraft/show/88494375,15:30,19:14,320,"$200,541.00","$172,573.00"
EWR - RDU,52570802861,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46258935,https://www.airlines-manager.com/network/showflight/52570802861,https://www.airlines-manager.com/aircraft/show/106104450,22:00,1:44,112,"$92,998.00","$77,801.00"
EWR - RIC,52529308297,EWR-IND-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52529308297,https://www.airlines-manager.com/aircraft/show/88494377,1:00,4:14,320,"$138,998.00","$115,577.00"
EWR - RIC,52529308298,EWR-IND-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52529308298,https://www.airlines-manager.com/aircraft/show/88494375,5:30,8:44,320,"$138,998.00","$115,577.00"
EWR - RIC,52556327700,EWR-IND-RDU 5,ERJ-175,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52556327700,https://www.airlines-manager.com/aircraft/show/106104450,14:15,17:29,112,"$62,608.00","$50,091.00"
EWR - RIC,52561334760,EWR-IND-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52561334760,https://www.airlines-manager.com/aircraft/show/105731236,17:30,20:44,320,"$138,998.00","$115,577.00"
EWR - RIC,52570802801,EWR-IND-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/46242111,https://www.airlines-manager.com/network/showflight/52570802801,https://www.airlines-manager.com/aircraft/show/88494376,21:15,0:29,320,"$138,998.00","$115,577.00"
EWR - RNO,52529308569,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52529308569,https://www.airlines-manager.com/aircraft/show/100096560,2:00,13:29,198,"$529,759.00","$487,972.00"
EWR - RNO,52543755633,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52543755633,https://www.airlines-manager.com/aircraft/show/99920622,10:15,21:29,320,"$702,697.00","$645,737.00"
EWR - RNO,52556327647,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52556327647,https://www.airlines-manager.com/aircraft/show/99920619,14:00,1:14,320,"$702,697.00","$645,737.00"
EWR - RNO,52561334664,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52561334664,https://www.airlines-manager.com/aircraft/show/99920620,16:30,3:44,320,"$702,697.00","$645,737.00"
EWR - RNO,52570802884,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056255,https://www.airlines-manager.com/network/showflight/52570802884,https://www.airlines-manager.com/aircraft/show/99920621,22:15,9:29,320,"$702,697.00","$645,737.00"
EWR - RSW,52529308843,EWR-RNO-MEM 1,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52529308843,https://www.airlines-manager.com/aircraft/show/99920622,3:15,9:29,320,"$388,840.00","$350,070.00"
EWR - RSW,52529308845,EWR-RNO-MEM 4,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52529308845,https://www.airlines-manager.com/aircraft/show/99920619,7:00,13:14,320,"$388,840.00","$350,070.00"
EWR - RSW,52543755628,EWR-RNO-MEM 3,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52543755628,https://www.airlines-manager.com/aircraft/show/99920620,10:15,16:29,320,"$388,840.00","$350,070.00"
EWR - RSW,52556327633,EWR-RNO-MEM 5 B,A319-100,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52556327633,https://www.airlines-manager.com/aircraft/show/100096560,14:00,20:14,198,"$294,823.00","$267,264.00"
EWR - RSW,52556327634,EWR-RNO-MEM 2,737-900ER,https://www.airlines-manager.com/network/showline/45056246,https://www.airlines-manager.com/network/showflight/52556327634,https://www.airlines-manager.com/aircraft/show/99920621,16:00,22:14,320,"$388,840.00","$350,070.00"
EWR - SAN,52529307836,EWR-MIA-ORD 3,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52529307836,https://www.airlines-manager.com/aircraft/show/113251307,0:00,11:29,338,"$775,604.00","$723,308.00"
EWR - SAN,52543755597,EWR-MIA-ORD 5,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52543755597,https://www.airlines-manager.com/aircraft/show/113251309,10:00,21:29,338,"$775,604.00","$723,308.00"
EWR - SAN,52556327794,EWR-MIA-ORD 1,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52556327794,https://www.airlines-manager.com/aircraft/show/113251305,15:15,2:44,338,"$775,604.00","$723,308.00"
EWR - SAN,52561334652,EWR-MIA-ORD 2,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52561334652,https://www.airlines-manager.com/aircraft/show/113251306,16:15,3:44,338,"$775,604.00","$723,308.00"
EWR - SAN,52570802894,EWR-MIA-ORD 4,A321neo,https://www.airlines-manager.com/network/showline/39319598,https://www.airlines-manager.com/network/showflight/52570802894,https://www.airlines-manager.com/aircraft/show/113251308,22:15,9:44,337,"$774,204.00","$721,964.00"
EWR - SAT,52529308481,EWR-ELP-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52529308481,https://www.airlines-manager.com/aircraft/show/103365576,1:45,9:59,320,"$517,618.00","$473,824.00"
EWR - SAT,52543755609,EWR-ELP-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52543755609,https://www.airlines-manager.com/aircraft/show/103365577,10:00,18:14,320,"$517,618.00","$473,824.00"
EWR - SAT,52551230511,EWR-ELP-SAT 5 B,A319-100,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52551230511,https://www.airlines-manager.com/aircraft/show/110582847,12:00,20:14,198,"$390,629.00","$358,925.00"
EWR - SAT,52566418126,EWR-ELP-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52566418126,https://www.airlines-manager.com/aircraft/show/103365578,19:30,3:44,320,"$517,618.00","$473,824.00"
EWR - SAT,52570802826,EWR-ELP-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/45356722,https://www.airlines-manager.com/network/showflight/52570802826,https://www.airlines-manager.com/aircraft/show/103365575,21:30,5:44,320,"$517,618.00","$473,824.00"
EWR - SAV,52529309023,EWR-COS-ICT 5,ERJ-175,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52529309023,https://www.airlines-manager.com/aircraft/show/108466265,4:30,9:29,112,"$146,280.00","$129,363.00"
EWR - SAV,52543755516,EWR-COS-ICT 3,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52543755516,https://www.airlines-manager.com/aircraft/show/108834810,9:00,13:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52543755517,EWR-COS-ICT 2,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52543755517,https://www.airlines-manager.com/aircraft/show/108834809,11:00,15:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52561334792,EWR-COS-ICT 1,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52561334792,https://www.airlines-manager.com/aircraft/show/108834808,18:00,22:59,310,"$307,503.00","$281,368.00"
EWR - SAV,52566418179,EWR-COS-ICT 4,A321-200,https://www.airlines-manager.com/network/showline/47218122,https://www.airlines-manager.com/network/showflight/52566418179,https://www.airlines-manager.com/aircraft/show/108834811,20:00,0:59,257,"$276,782.00","$251,676.00"
EWR - SDF,52529308903,EWR-LIT-FAR 2,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52529308903,https://www.airlines-manager.com/aircraft/show/86270787,4:00,8:29,310,"$295,400.00","$268,307.00"
EWR - SDF,52543755425,EWR-LIT-FAR 1,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52543755425,https://www.airlines-manager.com/aircraft/show/90452834,8:15,12:44,310,"$295,400.00","$268,307.00"
EWR - SDF,52556327780,EWR-LIT-FAR 4,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52556327780,https://www.airlines-manager.com/aircraft/show/86270784,15:00,19:29,310,"$295,400.00","$268,307.00"
EWR - SDF,52561334857,EWR-LIT-FAR 3,A321-200,https://www.airlines-manager.com/network/showline/48530172,https://www.airlines-manager.com/network/showflight/52561334857,https://www.airlines-manager.com/aircraft/show/86270786,18:15,22:44,310,"$295,400.00","$268,307.00"
EWR - SEA,52529308186,EWR-DFW-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52529308186,https://www.airlines-manager.com/aircraft/show/86238752,1:00,12:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52529308187,EWR-DFW-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52529308187,https://www.airlines-manager.com/aircraft/show/90489726,3:00,14:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52543755679,EWR-DFW-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52543755679,https://www.airlines-manager.com/aircraft/show/86238753,11:00,22:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52556327774,EWR-DFW-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52556327774,https://www.airlines-manager.com/aircraft/show/90489724,15:00,2:14,320,"$709,690.00","$640,621.00"
EWR - SEA,52570802930,EWR-DFW-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52570802930,https://www.airlines-manager.com/aircraft/show/90489725,22:45,9:59,320,"$709,690.00","$640,621.00"
EWR - SEA,52573805928,EWR-DFW-ATL 6 B,A319-100,https://www.airlines-manager.com/network/showline/39259211,https://www.airlines-manager.com/network/showflight/52573805928,https://www.airlines-manager.com/aircraft/show/105222360,23:30,10:59,198,"$534,821.00","$484,943.00"
EWR - SFO,52529307827,EWR-SFO-LAX 1,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52529307827,https://www.airlines-manager.com/aircraft/show/83716137,0:00,11:44,400,"$944,710.00","$860,101.00"
EWR - SFO,52529307828,EWR-SFO-LAX 2,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52529307828,https://www.airlines-manager.com/aircraft/show/89233028,1:30,13:14,400,"$944,710.00","$860,101.00"
EWR - SFO,52529307829,EWR-SFO-LAX 3,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52529307829,https://www.airlines-manager.com/aircraft/show/89233029,3:00,14:44,400,"$944,710.00","$860,101.00"
EWR - SFO,52551230563,EWR-SFO-LAX 4,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52551230563,https://www.airlines-manager.com/aircraft/show/89233030,12:15,23:59,400,"$944,710.00","$860,101.00"
EWR - SFO,52556327695,EWR-SFO-LAX 5,757-300,https://www.airlines-manager.com/network/showline/39254584,https://www.airlines-manager.com/network/showflight/52556327695,https://www.airlines-manager.com/aircraft/show/89233027,14:15,1:59,399,"$942,624.00","$858,099.00"
EWR - SJC,52529307816,EWR-OAK-SJC 2,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52529307816,https://www.airlines-manager.com/aircraft/show/104717242,0:00,11:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52529307817,EWR-OAK-SJC 3,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52529307817,https://www.airlines-manager.com/aircraft/show/104717241,2:00,13:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52543755638,EWR-OAK-SJC 4,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52543755638,https://www.airlines-manager.com/aircraft/show/104717240,10:30,22:29,310,"$732,841.00","$676,891.00"
EWR - SJC,52551230616,EWR-OAK-SJC 5,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52551230616,https://www.airlines-manager.com/aircraft/show/104717239,13:00,0:59,310,"$732,841.00","$676,891.00"
EWR - SJC,52570802858,EWR-OAK-SJC 1,A321-200,https://www.airlines-manager.com/network/showline/45881921,https://www.airlines-manager.com/network/showflight/52570802858,https://www.airlines-manager.com/aircraft/show/104717243,22:00,9:59,310,"$732,841.00","$676,891.00"
EWR - SJU,52529308018,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52529308018,https://www.airlines-manager.com/aircraft/show/106581304,0:30,8:44,320,"$526,630.00","$480,733.00"
EWR - SJU,52529308019,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52529308019,https://www.airlines-manager.com/aircraft/show/106581307,2:00,10:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52529308020,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52529308020,https://www.airlines-manager.com/aircraft/show/86238754,7:00,15:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52551230605,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52551230605,https://www.airlines-manager.com/aircraft/show/106581306,13:00,21:14,320,"$526,630.00","$480,733.00"
EWR - SJU,52556327711,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524807,https://www.airlines-manager.com/network/showflight/52556327711,https://www.airlines-manager.com/aircraft/show/106581305,14:30,22:44,320,"$526,630.00","$480,733.00"
EWR - SLC,52529308010,EWR-DEN-SLC 2,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52529308010,https://www.airlines-manager.com/aircraft/show/87153196,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,52529308011,EWR-DEN-SLC 5,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52529308011,https://www.airlines-manager.com/aircraft/show/90452833,0:15,9:59,310,"$611,440.00","$559,511.00"
EWR - SLC,52529308012,EWR-DEN-SLC 6 B,A319-100,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52529308012,https://www.airlines-manager.com/aircraft/show/105223076,1:15,10:59,198,"$459,846.00","$418,219.00"
EWR - SLC,52543755588,EWR-DEN-SLC 1,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52543755588,https://www.airlines-manager.com/aircraft/show/86270785,10:00,19:44,310,"$611,440.00","$559,511.00"
EWR - SLC,52543755589,EWR-DEN-SLC 4,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52543755589,https://www.airlines-manager.com/aircraft/show/90452835,11:00,20:44,310,"$611,440.00","$559,511.00"
EWR - SLC,52566418098,EWR-DEN-SLC 3,A321-200,https://www.airlines-manager.com/network/showline/42046650,https://www.airlines-manager.com/network/showflight/52566418098,https://www.airlines-manager.com/aircraft/show/86270783,19:15,4:59,310,"$611,440.00","$559,511.00"
EWR - SMF,52529307837,EWR-SMF-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52529307837,https://www.airlines-manager.com/aircraft/show/94889150,0:00,11:44,320,"$717,456.00","$659,009.00"
EWR - SMF,52529307838,EWR-SMF-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52529307838,https://www.airlines-manager.com/aircraft/show/94889151,1:30,13:14,320,"$717,456.00","$659,009.00"
EWR - SMF,52529307839,EWR-SMF-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52529307839,https://www.airlines-manager.com/aircraft/show/94889152,3:00,14:44,320,"$717,456.00","$659,009.00"
EWR - SMF,52551230473,EWR-SMF-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52551230473,https://www.airlines-manager.com/aircraft/show/94889153,11:30,23:14,320,"$717,456.00","$659,009.00"
EWR - SMF,52551230474,EWR-SMF-ONT 5,737-900ER,https://www.airlines-manager.com/network/showline/48619145,https://www.airlines-manager.com/network/showflight/52551230474,https://www.airlines-manager.com/aircraft/show/94889154,13:30,1:14,320,"$717,456.00","$659,009.00"
EWR - SNN,52543755643,EWR 56B-6 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52543755643,https://www.airlines-manager.com/aircraft/show/94521248,10:45,23:59,748,"$2,079,042.00","$1,895,781.00"
EWR - SNN,52566418040,EWR 56B-5 B1,777-300,https://www.airlines-manager.com/network/showline/46604244,https://www.airlines-manager.com/network/showflight/52566418040,https://www.airlines-manager.com/aircraft/show/94521253,18:45,7:59,748,"$1,989,528.00","$1,833,398.00"
EWR - STL,52529308208,EWR-STL-PIT 3,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52529308208,https://www.airlines-manager.com/aircraft/show/115400546,1:00,6:29,338,"$372,943.00","$341,948.00"
EWR - STL,52529308209,EWR-STL-PIT 2,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52529308209,https://www.airlines-manager.com/aircraft/show/115400547,4:15,9:44,338,"$372,943.00","$341,948.00"
EWR - STL,52543755596,EWR-STL-PIT 1,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52543755596,https://www.airlines-manager.com/aircraft/show/115400548,10:00,15:29,338,"$372,943.00","$341,948.00"
EWR - STL,52556327677,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52556327677,https://www.airlines-manager.com/aircraft/show/98887257,14:00,19:29,112,"$163,268.00","$142,501.00"
EWR - STL,52561334646,EWR-STL-PIT 4,A321neo,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52561334646,https://www.airlines-manager.com/aircraft/show/115400545,16:15,21:44,338,"$372,943.00","$341,948.00"
EWR - STL,52570802923,EWR-STL-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44784449,https://www.airlines-manager.com/network/showflight/52570802923,https://www.airlines-manager.com/aircraft/show/98887257,22:45,4:14,112,"$163,268.00","$142,501.00"
EWR - TLS,52529307842,Charter 2,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/52529307842,https://www.airlines-manager.com/aircraft/show/112787252,0:00,15:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLS,52551230500,Charter 1,747-300,https://www.airlines-manager.com/network/showline/48907589,https://www.airlines-manager.com/network/showflight/52551230500,https://www.airlines-manager.com/aircraft/show/110577510,12:00,3:14,828,"$2,631,372.00","$2,452,727.00"
EWR - TLV,52529308760,EWR-TLV 2 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52529308760,https://www.airlines-manager.com/aircraft/show/89124073,3:00,1:29,884,"$3,652,424.00","$3,333,075.00"
EWR - TLV,52570802784,EWR-TLV 1 S,777-300,https://www.airlines-manager.com/network/showline/39655245,https://www.airlines-manager.com/network/showflight/52570802784,https://www.airlines-manager.com/aircraft/show/93429385,21:00,19:29,883,"$3,649,547.00","$3,330,390.00"
EWR - TPA,52529309075,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52529309075,https://www.airlines-manager.com/aircraft/show/98379317,5:45,11:44,310,"$376,282.00","$341,101.00"
EWR - TPA,52543755640,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52543755640,https://www.airlines-manager.com/aircraft/show/98379316,10:45,16:44,310,"$376,282.00","$341,101.00"
EWR - TPA,52551230639,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52551230639,https://www.airlines-manager.com/aircraft/show/98379318,13:00,18:59,310,"$376,282.00","$341,101.00"
EWR - TPA,52556327762,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52556327762,https://www.airlines-manager.com/aircraft/show/98379315,15:00,20:59,310,"$376,282.00","$341,101.00"
EWR - TPA,52573805895,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44584397,https://www.airlines-manager.com/network/showflight/52573805895,https://www.airlines-manager.com/aircraft/show/98379319,23:15,5:14,310,"$376,282.00","$341,101.00"
EWR - TUL,52529308477,EWR-TUL-DSM 3,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52529308477,https://www.airlines-manager.com/aircraft/show/110044465,1:45,8:29,310,"$426,427.00","$392,326.00"
EWR - TUL,52529308478,EWR-TUL-DSM 2,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52529308478,https://www.airlines-manager.com/aircraft/show/110044464,3:30,10:14,310,"$426,427.00","$392,326.00"
EWR - TUL,52551230596,EWR-TUL-DSM 1,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52551230596,https://www.airlines-manager.com/aircraft/show/110044463,13:00,19:44,310,"$426,427.00","$392,326.00"
EWR - TUL,52561334672,EWR-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52561334672,https://www.airlines-manager.com/aircraft/show/110113039,16:30,23:14,112,"$200,700.00","$178,123.00"
EWR - TUL,52566418047,EWR-TUL-DSM 4,A321-200,https://www.airlines-manager.com/network/showline/47540564,https://www.airlines-manager.com/network/showflight/52566418047,https://www.airlines-manager.com/aircraft/show/110044466,18:45,1:29,310,"$426,427.00","$392,326.00"
EWR - TUS,52529308025,EWR-TUS-TPA 4,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52529308025,https://www.airlines-manager.com/aircraft/show/98379316,0:30,10:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52529308026,EWR-TUS-TPA 2,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52529308026,https://www.airlines-manager.com/aircraft/show/98379318,1:30,11:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52529308027,EWR-TUS-TPA 5,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52529308027,https://www.airlines-manager.com/aircraft/show/98379315,3:30,13:44,310,"$638,660.00","$590,566.00"
EWR - TUS,52551230640,EWR-TUS-TPA 1,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52551230640,https://www.airlines-manager.com/aircraft/show/98379319,13:00,23:14,310,"$638,660.00","$590,566.00"
EWR - TUS,52566418129,EWR-TUS-TPA 3,A321-200,https://www.airlines-manager.com/network/showline/44592944,https://www.airlines-manager.com/network/showflight/52566418129,https://www.airlines-manager.com/aircraft/show/98379317,19:30,5:44,310,"$638,660.00","$590,566.00"
EWR - YEG,52529307990,EWR-YEG-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52529307990,https://www.airlines-manager.com/aircraft/show/98936170,0:15,10:14,320,"$633,755.00","$581,361.00"
EWR - YEG,52529307991,EWR-YEG-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52529307991,https://www.airlines-manager.com/aircraft/show/98936171,2:15,12:14,320,"$633,755.00","$581,361.00"
EWR - YEG,52543755661,EWR-YEG-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52543755661,https://www.airlines-manager.com/aircraft/show/98936168,11:00,20:59,320,"$633,755.00","$581,361.00"
EWR - YEG,52551230568,EWR-YEG-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52551230568,https://www.airlines-manager.com/aircraft/show/98936169,12:30,22:29,320,"$633,755.00","$581,361.00"
EWR - YEG,52570802870,EWR-YEG-BFF 5 B,A319-100,https://www.airlines-manager.com/network/showline/49208033,https://www.airlines-manager.com/network/showflight/52570802870,https://www.airlines-manager.com/aircraft/show/115493369,22:00,7:59,198,"$473,509.00","$435,351.00"
EWR - YOW,52543755537,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52543755537,https://www.airlines-manager.com/aircraft/show/106581304,9:30,12:59,320,"$170,547.00","$145,216.00"
EWR - YOW,52543755538,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52543755538,https://www.airlines-manager.com/aircraft/show/106581307,11:00,14:29,320,"$170,547.00","$145,216.00"
EWR - YOW,52566418042,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52566418042,https://www.airlines-manager.com/aircraft/show/86238754,18:45,22:14,320,"$170,547.00","$145,216.00"
EWR - YOW,52570802795,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52570802795,https://www.airlines-manager.com/aircraft/show/106581306,21:15,0:44,320,"$170,547.00","$145,216.00"
EWR - YOW,52570802796,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524768,https://www.airlines-manager.com/network/showflight/52570802796,https://www.airlines-manager.com/aircraft/show/106581305,22:45,2:14,289,"$160,487.00","$135,430.00"
EWR - YUL,52543755535,EWR-CUN-SJU 3,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52543755535,https://www.airlines-manager.com/aircraft/show/106581306,9:30,12:59,320,"$173,962.00","$145,804.00"
EWR - YUL,52543755536,EWR-CUN-SJU 2,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52543755536,https://www.airlines-manager.com/aircraft/show/106581305,11:00,14:29,320,"$173,962.00","$145,804.00"
EWR - YUL,52556327796,EWR-CUN-SJU 5,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52556327796,https://www.airlines-manager.com/aircraft/show/86238754,15:15,18:44,320,"$173,962.00","$145,804.00"
EWR - YUL,52570802750,EWR-CUN-SJU 1,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52570802750,https://www.airlines-manager.com/aircraft/show/106581304,21:00,0:29,320,"$173,962.00","$145,804.00"
EWR - YUL,52570802751,EWR-CUN-SJU 4,737-900ER,https://www.airlines-manager.com/network/showline/46524780,https://www.airlines-manager.com/network/showflight/52570802751,https://www.airlines-manager.com/aircraft/show/106581307,22:30,1:59,320,"$173,962.00","$145,804.00"
EWR - YVR,52529307844,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52529307844,https://www.airlines-manager.com/aircraft/show/113681636,0:00,11:14,400,"$908,383.00","$836,005.00"
EWR - YVR,52529307845,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52529307845,https://www.airlines-manager.com/aircraft/show/113681637,1:30,12:44,400,"$908,383.00","$836,005.00"
EWR - YVR,52529307846,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52529307846,https://www.airlines-manager.com/aircraft/show/113681638,3:00,14:14,400,"$908,383.00","$836,005.00"
EWR - YVR,52543755695,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52543755695,https://www.airlines-manager.com/aircraft/show/113681639,11:15,22:29,400,"$908,383.00","$836,005.00"
EWR - YVR,52551230570,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/39297576,https://www.airlines-manager.com/network/showflight/52551230570,https://www.airlines-manager.com/aircraft/show/113681640,12:45,23:59,400,"$908,383.00","$836,005.00"
EWR - YYC,52529308342,EWR-YVR-YYC 4,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52529308342,https://www.airlines-manager.com/aircraft/show/113681639,1:30,11:14,400,"$787,576.00","$724,023.00"
EWR - YYC,52529308343,EWR-YVR-YYC 5,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52529308343,https://www.airlines-manager.com/aircraft/show/113681640,3:00,12:44,400,"$787,576.00","$724,023.00"
EWR - YYC,52543755694,EWR-YVR-YYC 1,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52543755694,https://www.airlines-manager.com/aircraft/show/113681636,11:15,20:59,400,"$787,576.00","$724,023.00"
EWR - YYC,52551230572,EWR-YVR-YYC 2,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52551230572,https://www.airlines-manager.com/aircraft/show/113681637,12:45,22:29,400,"$787,576.00","$724,023.00"
EWR - YYC,52556327697,EWR-YVR-YYC 3,757-300,https://www.airlines-manager.com/network/showline/48643425,https://www.airlines-manager.com/network/showflight/52556327697,https://www.airlines-manager.com/aircraft/show/113681638,14:15,23:59,400,"$787,576.00","$724,023.00"
EWR - YYZ,52529308588,EWR-DTW-YYZ 4,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52529308588,https://www.airlines-manager.com/aircraft/show/92003922,2:15,5:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,52543755371,EWR-DTW-YYZ 5,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52543755371,https://www.airlines-manager.com/aircraft/show/92003921,7:30,10:59,320,"$178,703.00","$144,365.00"
EWR - YYZ,52543755372,EWR-DTW-YYZ 2,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52543755372,https://www.airlines-manager.com/aircraft/show/92003924,10:00,13:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,52556327659,EWR-DTW-YYZ 1,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52556327659,https://www.airlines-manager.com/aircraft/show/92003925,14:00,17:29,320,"$178,703.00","$144,365.00"
EWR - YYZ,52561334858,EWR-DTW-YYZ 3,737-900ER,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52561334858,https://www.airlines-manager.com/aircraft/show/92003923,18:15,21:44,320,"$178,703.00","$144,365.00"
EWR - YYZ,52566418116,EWR CARGO 1,A321neo-LR,https://www.airlines-manager.com/network/showline/42503817,https://www.airlines-manager.com/network/showflight/52566418116,https://www.airlines-manager.com/aircraft/show/103406580,19:15,22:44,0,"$63,901.00","$35,124.00"
EWR - ZRH,52543755388,EWR 84A-6 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52543755388,https://www.airlines-manager.com/aircraft/show/90656552,7:45,23:59,852,"$2,628,452.00","$2,385,763.00"
EWR - ZRH,52566418153,EWR 84A-7 B2,777-300,https://www.airlines-manager.com/network/showline/42022972,https://www.airlines-manager.com/network/showflight/52566418153,https://www.airlines-manager.com/aircraft/show/94521249,20:00,12:14,852,"$2,628,452.00","$2,385,763.00"
HNL - AKL,52556327858,HNL 84B-2 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52556327858,https://www.airlines-manager.com/aircraft/show/96807092,16:00,9:59,832,"$2,903,891.00","$2,653,215.00"
HNL - AKL,52570802945,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/44044097,https://www.airlines-manager.com/network/showflight/52570802945,https://www.airlines-manager.com/aircraft/show/96807088,23:00,16:59,831,"$2,858,899.00","$2,621,847.00"
HNL - ATL,52529309043,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52529309043,https://www.airlines-manager.com/aircraft/show/109187499,4:45,22:44,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,52556327838,HNL 56B-4 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52556327838,https://www.airlines-manager.com/aircraft/show/109187501,16:00,9:59,592,"$2,190,918.00","$2,005,063.00"
HNL - ATL,52570802922,HNL 56B-2 B,787-10,https://www.airlines-manager.com/network/showline/47262358,https://www.airlines-manager.com/network/showflight/52570802922,https://www.airlines-manager.com/aircraft/show/109187499,22:45,16:44,592,"$2,190,918.00","$2,005,063.00"
HNL - BNE,52529308905,HNL 84B-6 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52529308905,https://www.airlines-manager.com/aircraft/show/96807088,4:00,22:59,832,"$3,046,351.00","$2,777,502.00"
HNL - BNE,52543755611,HNL 84B-3 F,777-300,https://www.airlines-manager.com/network/showline/45391394,https://www.airlines-manager.com/network/showflight/52543755611,https://www.airlines-manager.com/aircraft/show/96807091,10:00,4:59,831,"$3,024,193.00","$2,761,888.00"
HNL - CLT,52529309025,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52529309025,https://www.airlines-manager.com/aircraft/show/112066134,4:30,23:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,52529309026,HNL 56D-5 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52529309026,https://www.airlines-manager.com/aircraft/show/112066136,5:30,0:14,592,"$2,251,100.00","$2,095,401.00"
HNL - CLT,52573805896,HNL 56D-3 B,787-10,https://www.airlines-manager.com/network/showline/48149169,https://www.airlines-manager.com/network/showflight/52573805896,https://www.airlines-manager.com/aircraft/show/112066134,23:15,17:59,592,"$2,251,100.00","$2,095,401.00"
HNL - CXI,52529308889,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52529308889,https://www.airlines-manager.com/aircraft/show/107563068,3:45,10:59,0,"$121,156.00","$97,490.00"
HNL - CXI,52529308890,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52529308890,https://www.airlines-manager.com/aircraft/show/90717080,5:30,12:44,388,"$489,801.00","$459,293.00"
HNL - CXI,52556327738,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52556327738,https://www.airlines-manager.com/aircraft/show/90717080,15:00,22:14,388,"$489,801.00","$459,293.00"
HNL - CXI,52570802896,HNL-CXI S,A321-200,https://www.airlines-manager.com/network/showline/43541576,https://www.airlines-manager.com/network/showflight/52570802896,https://www.airlines-manager.com/aircraft/show/90717080,22:15,5:29,388,"$489,801.00","$459,293.00"
HNL - EWR,52529309017,HNL 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52529309017,https://www.airlines-manager.com/aircraft/show/95351586,4:15,23:59,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,52529309018,HNL 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52529309018,https://www.airlines-manager.com/aircraft/show/95351587,6:00,1:44,592,"$2,361,352.00","$2,199,437.00"
HNL - EWR,52566418140,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43560815,https://www.airlines-manager.com/network/showflight/52566418140,https://www.airlines-manager.com/aircraft/show/95351590,19:45,15:29,591,"$2,357,780.00","$2,196,020.00"
HNL - GUM,52529307821,HNL-GUM,A321neo,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52529307821,https://www.airlines-manager.com/aircraft/show/115400544,0:00,16:44,338,"$1,120,351.00","$1,057,292.00"
HNL - GUM,52529307822,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/43718411,https://www.airlines-manager.com/network/showflight/52529307822,https://www.airlines-manager.com/aircraft/show/95818924,4:45,20:29,832,"$2,549,111.00","$2,348,684.00"
HNL - IAD,52529308821,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52529308821,https://www.airlines-manager.com/aircraft/show/111639415,3:15,22:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,52543755529,HNL 56C-5 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52543755529,https://www.airlines-manager.com/aircraft/show/111639417,9:15,4:14,592,"$2,267,144.00","$2,114,417.00"
HNL - IAD,52566418167,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011873,https://www.airlines-manager.com/network/showflight/52566418167,https://www.airlines-manager.com/aircraft/show/111639419,20:00,14:59,590,"$2,257,172.00","$2,104,776.00"
HNL - IAH,52529307830,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52529307830,https://www.airlines-manager.com/aircraft/show/95351592,0:00,15:59,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,52529307831,HNL 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52529307831,https://www.airlines-manager.com/aircraft/show/95351590,3:45,19:44,592,"$1,926,257.00","$1,785,946.00"
HNL - IAH,52556327823,HNL 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/43568404,https://www.airlines-manager.com/network/showflight/52556327823,https://www.airlines-manager.com/aircraft/show/95351592,16:00,7:59,591,"$1,920,718.00","$1,780,553.00"
HNL - ITO,52529308518,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52529308518,https://www.airlines-manager.com/aircraft/show/94803593,1:45,4:44,170,"$76,990.00","$66,463.00"
HNL - ITO,52529308520,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52529308520,https://www.airlines-manager.com/aircraft/show/94803596,3:15,6:14,170,"$76,990.00","$66,463.00"
HNL - ITO,52529308523,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52529308523,https://www.airlines-manager.com/aircraft/show/94803595,6:00,8:59,170,"$76,990.00","$66,463.00"
HNL - ITO,52543755534,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52543755534,https://www.airlines-manager.com/aircraft/show/94803594,9:30,12:29,170,"$76,990.00","$66,463.00"
HNL - ITO,52556327759,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52556327759,https://www.airlines-manager.com/aircraft/show/94803593,15:00,17:59,170,"$76,990.00","$66,463.00"
HNL - ITO,52561334673,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52561334673,https://www.airlines-manager.com/aircraft/show/94803596,16:30,19:29,170,"$76,990.00","$66,463.00"
HNL - ITO,52566418103,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52566418103,https://www.airlines-manager.com/aircraft/show/94803595,19:15,22:14,170,"$76,990.00","$66,463.00"
HNL - ITO,52570802931,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516658,https://www.airlines-manager.com/network/showflight/52570802931,https://www.airlines-manager.com/aircraft/show/94803594,22:45,1:44,123,"$64,566.00","$54,537.00"
HNL - JFK,52529308756,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52529308756,https://www.airlines-manager.com/aircraft/show/109187503,3:00,22:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,52543755511,HNL 56B-1 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52543755511,https://www.airlines-manager.com/aircraft/show/109187498,9:00,4:44,592,"$2,393,855.00","$2,211,415.00"
HNL - JFK,52561334706,HNL 56B-3 B,787-10,https://www.airlines-manager.com/network/showline/47262348,https://www.airlines-manager.com/network/showflight/52561334706,https://www.airlines-manager.com/aircraft/show/109187500,17:00,12:44,592,"$2,393,855.00","$2,211,415.00"
HNL - KOA,52529308153,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52529308153,https://www.airlines-manager.com/aircraft/show/94803595,0:45,3:29,170,"$58,664.00","$48,286.00"
HNL - KOA,52529308154,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52529308154,https://www.airlines-manager.com/aircraft/show/94803594,4:15,6:59,170,"$58,664.00","$48,286.00"
HNL - KOA,52529308155,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52529308155,https://www.airlines-manager.com/aircraft/show/94803593,7:15,9:59,170,"$58,664.00","$48,286.00"
HNL - KOA,52543755474,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52543755474,https://www.airlines-manager.com/aircraft/show/94803596,8:45,11:29,170,"$58,664.00","$48,286.00"
HNL - KOA,52556327615,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52556327615,https://www.airlines-manager.com/aircraft/show/94803595,14:00,16:44,170,"$58,664.00","$48,286.00"
HNL - KOA,52561334753,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52561334753,https://www.airlines-manager.com/aircraft/show/94803594,17:30,20:14,170,"$58,664.00","$48,286.00"
HNL - KOA,52566418204,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52566418204,https://www.airlines-manager.com/aircraft/show/94803593,20:30,23:14,170,"$58,664.00","$48,286.00"
HNL - KOA,52570802875,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516655,https://www.airlines-manager.com/network/showflight/52570802875,https://www.airlines-manager.com/aircraft/show/94803596,22:00,0:44,170,"$58,664.00","$48,286.00"
HNL - LAS,52529309084,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52529309084,https://www.airlines-manager.com/aircraft/show/95818922,6:30,18:29,832,"$1,885,320.00","$1,698,692.00"
HNL - LAS,52561334677,HNL-LAS S,A321-200,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52561334677,https://www.airlines-manager.com/aircraft/show/116385511,16:30,5:14,232,"$743,641.00","$672,139.00"
HNL - LAS,52566418202,HNL 84A-3 F,777-300,https://www.airlines-manager.com/network/showline/45390240,https://www.airlines-manager.com/network/showflight/52566418202,https://www.airlines-manager.com/aircraft/show/95818924,20:30,8:29,800,"$1,839,558.00","$1,655,915.00"
HNL - LAX,52529309172,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52529309172,https://www.airlines-manager.com/aircraft/show/110044460,7:00,18:59,338,"$786,302.00","$718,030.00"
HNL - LAX,52543755512,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52543755512,https://www.airlines-manager.com/aircraft/show/110044461,9:00,20:59,338,"$786,302.00","$718,030.00"
HNL - LAX,52543755513,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52543755513,https://www.airlines-manager.com/aircraft/show/106106389,10:00,21:59,198,"$544,259.00","$486,979.00"
HNL - LAX,52561334850,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52561334850,https://www.airlines-manager.com/aircraft/show/110044458,18:15,6:14,338,"$786,302.00","$718,030.00"
HNL - LAX,52566418193,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52566418193,https://www.airlines-manager.com/aircraft/show/110044459,20:15,8:14,338,"$786,302.00","$718,030.00"
HNL - LAX,52570802844,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43538953,https://www.airlines-manager.com/network/showflight/52570802844,https://www.airlines-manager.com/aircraft/show/110044462,21:45,9:44,338,"$786,302.00","$718,030.00"
HNL - LIH,52529308150,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52529308150,https://www.airlines-manager.com/aircraft/show/94803596,0:45,3:14,170,"$50,924.00","$42,504.00"
HNL - LIH,52529308151,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52529308151,https://www.airlines-manager.com/aircraft/show/94803595,3:30,5:59,170,"$50,924.00","$42,504.00"
HNL - LIH,52529308152,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52529308152,https://www.airlines-manager.com/aircraft/show/94803594,7:00,9:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52543755604,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52543755604,https://www.airlines-manager.com/aircraft/show/94803593,10:00,12:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52556327614,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52556327614,https://www.airlines-manager.com/aircraft/show/94803596,14:00,16:29,170,"$50,924.00","$42,504.00"
HNL - LIH,52561334692,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52561334692,https://www.airlines-manager.com/aircraft/show/94803595,16:45,19:14,170,"$50,924.00","$42,504.00"
HNL - LIH,52566418197,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52566418197,https://www.airlines-manager.com/aircraft/show/94803594,20:15,22:44,170,"$50,924.00","$42,504.00"
HNL - LIH,52573805900,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516646,https://www.airlines-manager.com/network/showflight/52573805900,https://www.airlines-manager.com/aircraft/show/94803593,23:15,1:44,169,"$50,697.00","$42,282.00"
HNL - LNY,52529308196,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52529308196,https://www.airlines-manager.com/aircraft/show/106107514,1:00,3:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52529308197,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52529308197,https://www.airlines-manager.com/aircraft/show/106107514,3:30,5:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52529308198,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52529308198,https://www.airlines-manager.com/aircraft/show/106107514,6:00,8:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52543755463,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52543755463,https://www.airlines-manager.com/aircraft/show/106107514,8:30,10:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52556327771,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52556327771,https://www.airlines-manager.com/aircraft/show/106107514,15:00,17:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52561334763,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52561334763,https://www.airlines-manager.com/aircraft/show/106107514,17:30,19:59,116,"$30,288.00","$25,281.00"
HNL - LNY,52566418181,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52566418181,https://www.airlines-manager.com/aircraft/show/106107514,20:00,22:29,116,"$30,288.00","$25,281.00"
HNL - LNY,52570802902,HNL-LNY,Q-400,https://www.airlines-manager.com/network/showline/43516637,https://www.airlines-manager.com/network/showflight/52570802902,https://www.airlines-manager.com/aircraft/show/106107514,22:30,0:59,116,"$30,288.00","$25,281.00"
HNL - MCO,52529308173,HNL 56C-7 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52529308173,https://www.airlines-manager.com/aircraft/show/111639419,1:00,19:59,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,52529308174,HNL 56C-6 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52529308174,https://www.airlines-manager.com/aircraft/show/111639418,4:15,23:14,592,"$2,277,613.00","$2,117,514.00"
HNL - MCO,52543755434,HNL 56C-2 B,787-10,https://www.airlines-manager.com/network/showline/48011877,https://www.airlines-manager.com/network/showflight/52543755434,https://www.airlines-manager.com/aircraft/show/111639414,8:15,3:14,590,"$2,271,710.00","$2,111,878.00"
HNL - MEL,52543755461,HNL 84A-4 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52543755461,https://www.airlines-manager.com/aircraft/show/95818923,8:30,6:29,832,"$3,528,490.00","$3,227,108.00"
HNL - MEL,52566418159,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/45395143,https://www.airlines-manager.com/network/showflight/52566418159,https://www.airlines-manager.com/aircraft/show/95818920,20:00,17:59,830,"$3,521,289.00","$3,220,326.00"
HNL - MIA,52543755467,HNL 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52543755467,https://www.airlines-manager.com/aircraft/show/95351591,8:30,3:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,52543755468,HNL 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52543755468,https://www.airlines-manager.com/aircraft/show/95351588,10:45,5:59,592,"$2,322,346.00","$2,156,085.00"
HNL - MIA,52556327808,HNL 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/43560807,https://www.airlines-manager.com/network/showflight/52556327808,https://www.airlines-manager.com/aircraft/show/95351589,15:30,10:44,592,"$2,322,346.00","$2,156,085.00"
HNL - MNL,52543755373,HNL 84A-2 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52543755373,https://www.airlines-manager.com/aircraft/show/95818925,7:30,4:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MNL,52566418029,HNL 84A-5 F,777-300,https://www.airlines-manager.com/network/showline/43762944,https://www.airlines-manager.com/network/showflight/52566418029,https://www.airlines-manager.com/aircraft/show/95818922,18:30,15:44,832,"$3,449,291.00","$3,159,994.00"
HNL - MSP,52556327843,HNL 56C-1 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52556327843,https://www.airlines-manager.com/aircraft/show/111639413,16:00,8:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,52561334704,HNL 56C-4 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52561334704,https://www.airlines-manager.com/aircraft/show/111639416,17:00,9:14,592,"$1,940,305.00","$1,805,932.00"
HNL - MSP,52570802888,HNL 56C-3 B,787-10,https://www.airlines-manager.com/network/showline/48011881,https://www.airlines-manager.com/network/showflight/52570802888,https://www.airlines-manager.com/aircraft/show/111639415,22:15,14:29,590,"$1,935,279.00","$1,801,129.00"
HNL - NAN,52529308897,HNL 84A-7 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52529308897,https://www.airlines-manager.com/aircraft/show/95818920,3:45,17:14,832,"$2,066,762.00","$1,895,556.00"
HNL - NAN,52561334793,HNL 84A-1 F,777-300,https://www.airlines-manager.com/network/showline/43541571,https://www.airlines-manager.com/network/showflight/52561334793,https://www.airlines-manager.com/aircraft/show/95818926,18:00,7:29,830,"$2,031,188.00","$1,869,931.00"
HNL - OGG,52529308489,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52529308489,https://www.airlines-manager.com/aircraft/show/94803594,1:45,4:14,170,"$51,594.00","$42,796.00"
HNL - OGG,52529308490,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52529308490,https://www.airlines-manager.com/aircraft/show/94803593,4:45,7:14,170,"$51,594.00","$42,796.00"
HNL - OGG,52529308492,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52529308492,https://www.airlines-manager.com/aircraft/show/94803596,6:15,8:44,170,"$51,594.00","$42,796.00"
HNL - OGG,52543755501,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52543755501,https://www.airlines-manager.com/aircraft/show/94803595,9:00,11:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52556327758,HNL Interisland 3,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52556327758,https://www.airlines-manager.com/aircraft/show/94803594,15:00,17:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52561334801,HNL Interisland 4,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52561334801,https://www.airlines-manager.com/aircraft/show/94803593,18:00,20:29,170,"$51,594.00","$42,796.00"
HNL - OGG,52566418128,HNL Interisland 1,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52566418128,https://www.airlines-manager.com/aircraft/show/94803596,19:30,21:59,170,"$51,594.00","$42,796.00"
HNL - OGG,52570802881,HNL Interisland 2,717-200,https://www.airlines-manager.com/network/showline/43516648,https://www.airlines-manager.com/network/showflight/52570802881,https://www.airlines-manager.com/aircraft/show/94803595,22:15,0:44,170,"$51,594.00","$42,796.00"
HNL - ORD,52543755598,HNL 56B-5 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52543755598,https://www.airlines-manager.com/aircraft/show/109187502,10:00,2:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,52556327835,HNL 56B-7 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52556327835,https://www.airlines-manager.com/aircraft/show/109187504,16:00,8:59,592,"$2,079,491.00","$1,910,031.00"
HNL - ORD,52570802939,HNL 56B-6 B,787-10,https://www.airlines-manager.com/network/showline/43560795,https://www.airlines-manager.com/network/showflight/52570802939,https://www.airlines-manager.com/aircraft/show/109187503,22:45,15:44,591,"$2,077,242.00","$1,907,888.00"
HNL - PHX,52529308853,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52529308853,https://www.airlines-manager.com/aircraft/show/112066138,3:30,15:59,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,52556327743,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52556327743,https://www.airlines-manager.com/aircraft/show/112066137,15:00,3:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PHX,52556327744,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/43718390,https://www.airlines-manager.com/network/showflight/52556327744,https://www.airlines-manager.com/aircraft/show/112066133,16:00,4:29,592,"$1,512,390.00","$1,401,255.00"
HNL - PPG,52529308591,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52529308591,https://www.airlines-manager.com/aircraft/show/107564830,2:15,14:29,0,"$206,662.00","$166,187.00"
HNL - PPG,52529308593,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52529308593,https://www.airlines-manager.com/aircraft/show/88725599,3:30,15:44,380,"$785,919.00","$736,317.00"
HNL - PPG,52556327845,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52556327845,https://www.airlines-manager.com/aircraft/show/88725598,16:00,4:14,380,"$785,919.00","$736,317.00"
HNL - PPG,52561334845,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998032,https://www.airlines-manager.com/network/showflight/52561334845,https://www.airlines-manager.com/aircraft/show/88725597,18:00,6:14,380,"$785,919.00","$736,317.00"
HNL - PPT,52529309036,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52529309036,https://www.airlines-manager.com/aircraft/show/88725600,4:45,17:29,310,"$766,311.00","$713,344.00"
HNL - PPT,52556327733,HNL CARGO 2,737-700,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52556327733,https://www.airlines-manager.com/aircraft/show/107563068,15:00,3:44,0,"$210,884.00","$168,048.00"
HNL - PPT,52556327734,HNL 84A-6 F,777-300,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52556327734,https://www.airlines-manager.com/aircraft/show/95818921,15:45,3:44,832,"$1,835,751.00","$1,699,507.00"
HNL - PPT,52561334766,HNL-PPT,A321-200,https://www.airlines-manager.com/network/showline/43719628,https://www.airlines-manager.com/network/showflight/52561334766,https://www.airlines-manager.com/aircraft/show/88725600,17:30,6:14,310,"$688,621.00","$643,176.00"
HNL - SEA,52529308898,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52529308898,https://www.airlines-manager.com/aircraft/show/112066132,3:45,15:14,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,52556327844,HNL 56D-1 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52556327844,https://www.airlines-manager.com/aircraft/show/112066132,16:00,3:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SEA,52561334840,HNL 56D-4 B,787-10,https://www.airlines-manager.com/network/showline/48149157,https://www.airlines-manager.com/network/showflight/52561334840,https://www.airlines-manager.com/aircraft/show/112066135,18:00,5:29,592,"$1,411,222.00","$1,309,549.00"
HNL - SFO,52529309093,HNL-SFO-LAX 1,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52529309093,https://www.airlines-manager.com/aircraft/show/110044458,7:00,18:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52543755514,HNL-SFO-LAX 2,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52543755514,https://www.airlines-manager.com/aircraft/show/110044459,9:00,20:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52543755515,HNL-SFO-LAX 5,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52543755515,https://www.airlines-manager.com/aircraft/show/110044462,10:30,21:44,338,"$755,403.00","$696,919.00"
HNL - SFO,52566418077,HNL-SFO-LAX 3,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52566418077,https://www.airlines-manager.com/aircraft/show/110044460,19:00,6:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52570802753,HNL-SFO-LAX 4,A321neo,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52570802753,https://www.airlines-manager.com/aircraft/show/110044461,21:00,8:14,338,"$755,403.00","$696,919.00"
HNL - SFO,52570802754,HNL-SFO-LAX 6 B,A319-100,https://www.airlines-manager.com/network/showline/43557863,https://www.airlines-manager.com/network/showflight/52570802754,https://www.airlines-manager.com/aircraft/show/106106389,22:00,9:29,198,"$526,083.00","$476,796.00"
HNL - SIN,52529309058,HNL 84B-4 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52529309058,https://www.airlines-manager.com/aircraft/show/96807090,5:15,7:29,832,"$4,307,774.00","$3,909,552.00"
HNL - SIN,52561334728,HNL 84B-7 F,777-300,https://www.airlines-manager.com/network/showline/44044115,https://www.airlines-manager.com/network/showflight/52561334728,https://www.airlines-manager.com/aircraft/show/96807087,17:00,19:14,831,"$4,304,296.00","$3,906,301.00"
HNL - SYD,52543755383,HNL 84B-5 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52543755383,https://www.airlines-manager.com/aircraft/show/96807089,7:30,3:59,832,"$3,329,893.00","$3,022,862.00"
HNL - SYD,52566418100,HNL 84B-1 F,777-300,https://www.airlines-manager.com/network/showline/43719642,https://www.airlines-manager.com/network/showflight/52566418100,https://www.airlines-manager.com/aircraft/show/96807093,19:15,15:44,832,"$3,329,893.00","$3,022,862.00"
HNL - TRW,52529308927,HNL-TRW-PPG 2 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52529308927,https://www.airlines-manager.com/aircraft/show/88725598,4:15,15:44,380,"$764,351.00","$719,720.00"
HNL - TRW,52529308928,HNL-TRW-PPG 3 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52529308928,https://www.airlines-manager.com/aircraft/show/88725597,6:15,17:44,380,"$764,351.00","$719,720.00"
HNL - TRW,52556327731,HNL CARGO 1,737-700,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52556327731,https://www.airlines-manager.com/aircraft/show/107564830,15:00,2:14,0,"$192,302.00","$155,736.00"
HNL - TRW,52556327732,HNL-TRW-PPG 1 S,A321-200,https://www.airlines-manager.com/network/showline/43998029,https://www.airlines-manager.com/network/showflight/52556327732,https://www.airlines-manager.com/aircraft/show/88725599,16:00,3:29,380,"$764,351.00","$719,720.00"
HNL - YVR,52529308004,HNL 56D-6 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52529308004,https://www.airlines-manager.com/aircraft/show/112066137,0:15,11:59,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,52529308005,HNL 56D-2 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52529308005,https://www.airlines-manager.com/aircraft/show/112066133,3:30,15:14,592,"$1,414,047.00","$1,318,641.00"
HNL - YVR,52556327846,HNL 56D-7 B,787-10,https://www.airlines-manager.com/network/showline/48149164,https://www.airlines-manager.com/network/showflight/52556327846,https://www.airlines-manager.com/aircraft/show/112066138,16:00,3:44,592,"$1,414,047.00","$1,318,641.00"
IAH - ABQ,52529308294,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52529308294,https://www.airlines-manager.com/aircraft/show/103600700,1:00,5:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52529308295,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52529308295,https://www.airlines-manager.com/aircraft/show/110582844,2:30,7:29,198,"$240,770.00","$214,084.00"
IAH - ABQ,52529308296,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52529308296,https://www.airlines-manager.com/aircraft/show/88725601,6:00,10:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52551230625,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52551230625,https://www.airlines-manager.com/aircraft/show/103600702,13:00,17:59,310,"$316,784.00","$283,467.00"
IAH - ABQ,52566418056,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490320,https://www.airlines-manager.com/network/showflight/52566418056,https://www.airlines-manager.com/aircraft/show/103600701,18:45,23:44,310,"$316,784.00","$283,467.00"
IAH - ALB,52529307975,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52529307975,https://www.airlines-manager.com/aircraft/show/114266976,0:15,7:59,320,"$495,250.00","$449,796.00"
IAH - ALB,52529307976,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52529307976,https://www.airlines-manager.com/aircraft/show/92800067,2:00,9:59,112,"$234,401.00","$207,361.00"
IAH - ALB,52551230507,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52551230507,https://www.airlines-manager.com/aircraft/show/114266971,12:00,19:44,320,"$495,250.00","$449,796.00"
IAH - ALB,52556327781,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52556327781,https://www.airlines-manager.com/aircraft/show/114266970,15:00,22:44,320,"$495,250.00","$449,796.00"
IAH - ALB,52566418188,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841855,https://www.airlines-manager.com/network/showflight/52566418188,https://www.airlines-manager.com/aircraft/show/114266972,20:15,3:59,320,"$495,250.00","$449,796.00"
IAH - ANC,52551230558,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52551230558,https://www.airlines-manager.com/aircraft/show/108258010,12:00,2:44,310,"$897,007.00","$826,783.00"
IAH - ANC,52556327606,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52556327606,https://www.airlines-manager.com/aircraft/show/108258011,14:00,4:44,310,"$897,007.00","$826,783.00"
IAH - ANC,52566418096,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52566418096,https://www.airlines-manager.com/aircraft/show/108258012,19:15,9:59,310,"$897,007.00","$826,783.00"
IAH - ANC,52570802798,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52570802798,https://www.airlines-manager.com/aircraft/show/108089220,21:15,11:59,310,"$897,007.00","$826,783.00"
IAH - ANC,52573805897,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054828,https://www.airlines-manager.com/network/showflight/52573805897,https://www.airlines-manager.com/aircraft/show/108286957,23:15,13:59,196,"$662,603.00","$606,539.00"
IAH - ATL,52529307977,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52529307977,https://www.airlines-manager.com/aircraft/show/82323704,0:15,4:59,112,"$146,102.00","$112,061.00"
IAH - ATL,52543755562,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52543755562,https://www.airlines-manager.com/aircraft/show/95894466,10:00,14:44,320,"$306,681.00","$242,606.00"
IAH - ATL,52543755563,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52543755563,https://www.airlines-manager.com/aircraft/show/96256511,10:45,15:29,320,"$306,681.00","$242,606.00"
IAH - ATL,52556327841,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52556327841,https://www.airlines-manager.com/aircraft/show/96183549,16:00,20:44,320,"$306,681.00","$242,606.00"
IAH - ATL,52561334779,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52561334779,https://www.airlines-manager.com/aircraft/show/96177955,17:45,22:29,320,"$306,681.00","$242,606.00"
IAH - ATL,52573805946,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475893,https://www.airlines-manager.com/network/showflight/52573805946,https://www.airlines-manager.com/aircraft/show/96250652,23:45,4:29,319,"$304,882.00","$240,835.00"
IAH - AUS,52529309022,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52529309022,https://www.airlines-manager.com/aircraft/show/106007214,4:15,6:59,338,"$100,421.00","$76,820.00"
IAH - AUS,52543755653,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52543755653,https://www.airlines-manager.com/aircraft/show/106007213,11:00,13:44,338,"$100,421.00","$76,820.00"
IAH - AUS,52551230523,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52551230523,https://www.airlines-manager.com/aircraft/show/106007217,12:00,14:44,338,"$100,421.00","$76,820.00"
IAH - AUS,52561334853,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52561334853,https://www.airlines-manager.com/aircraft/show/106007216,18:15,20:59,338,"$100,421.00","$76,820.00"
IAH - AUS,52570802812,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44227440,https://www.airlines-manager.com/network/showflight/52570802812,https://www.airlines-manager.com/aircraft/show/106007215,21:30,0:14,266,"$87,849.00","$64,477.00"
IAH - BDL,52529309080,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52529309080,https://www.airlines-manager.com/aircraft/show/103600700,6:00,13:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52543755377,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52543755377,https://www.airlines-manager.com/aircraft/show/110582844,7:30,15:29,198,"$375,540.00","$341,603.00"
IAH - BDL,52543755378,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52543755378,https://www.airlines-manager.com/aircraft/show/88725601,11:00,18:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52561334796,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52561334796,https://www.airlines-manager.com/aircraft/show/103600702,18:00,1:59,310,"$498,318.00","$455,978.00"
IAH - BDL,52566418146,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52566418146,https://www.airlines-manager.com/aircraft/show/96990010,19:45,3:44,112,"$234,490.00","$206,457.00"
IAH - BDL,52573805933,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495448,https://www.airlines-manager.com/network/showflight/52573805933,https://www.airlines-manager.com/aircraft/show/103600701,23:45,7:44,310,"$498,318.00","$455,978.00"
IAH - BFF,52529308912,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52529308912,https://www.airlines-manager.com/aircraft/show/114266972,4:00,9:44,320,"$365,462.00","$327,584.00"
IAH - BFF,52543755624,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52543755624,https://www.airlines-manager.com/aircraft/show/114266976,10:15,15:59,320,"$365,462.00","$327,584.00"
IAH - BFF,52551230504,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52551230504,https://www.airlines-manager.com/aircraft/show/92800067,12:00,17:44,112,"$173,194.00","$151,513.00"
IAH - BFF,52566418145,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52566418145,https://www.airlines-manager.com/aircraft/show/114266971,19:45,1:29,320,"$365,462.00","$327,584.00"
IAH - BFF,52570802924,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841858,https://www.airlines-manager.com/network/showflight/52570802924,https://www.airlines-manager.com/aircraft/show/114266970,22:45,4:29,320,"$365,462.00","$327,584.00"
IAH - BNA,52529308919,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52529308919,https://www.airlines-manager.com/aircraft/show/104258214,4:00,8:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52543755523,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52543755523,https://www.airlines-manager.com/aircraft/show/104258213,9:15,13:59,310,"$301,810.00","$270,601.00"
IAH - BNA,52556327757,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52556327757,https://www.airlines-manager.com/aircraft/show/104258212,15:00,19:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52570802856,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52570802856,https://www.airlines-manager.com/aircraft/show/104258211,22:00,2:44,310,"$301,810.00","$270,601.00"
IAH - BNA,52570802857,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737509,https://www.airlines-manager.com/network/showflight/52570802857,https://www.airlines-manager.com/aircraft/show/103534664,23:00,3:44,112,"$143,442.00","$123,571.00"
IAH - BOG,52529309079,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52529309079,https://www.airlines-manager.com/aircraft/show/106676235,6:00,15:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,52556327666,IAH 56A-6 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52556327666,https://www.airlines-manager.com/aircraft/show/106676237,14:00,23:59,648,"$1,300,449.00","$1,208,157.00"
IAH - BOG,52566418163,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41798688,https://www.airlines-manager.com/network/showflight/52566418163,https://www.airlines-manager.com/aircraft/show/106676232,20:00,5:59,647,"$1,297,000.00","$1,204,791.00"
IAH - BOI,52529308301,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52529308301,https://www.airlines-manager.com/aircraft/show/104258213,1:15,9:14,310,"$500,447.00","$458,820.00"
IAH - BOI,52529308302,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52529308302,https://www.airlines-manager.com/aircraft/show/104258212,7:00,14:59,310,"$500,447.00","$458,820.00"
IAH - BOI,52556327616,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52556327616,https://www.airlines-manager.com/aircraft/show/104258211,14:00,21:59,310,"$500,447.00","$458,820.00"
IAH - BOI,52556327617,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52556327617,https://www.airlines-manager.com/aircraft/show/103534664,15:00,22:59,112,"$235,499.00","$207,937.00"
IAH - BOI,52566418162,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737517,https://www.airlines-manager.com/network/showflight/52566418162,https://www.airlines-manager.com/aircraft/show/104258214,20:00,3:59,310,"$500,447.00","$458,820.00"
IAH - BOS,52529308516,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52529308516,https://www.airlines-manager.com/aircraft/show/88400800,1:45,9:59,400,"$665,843.00","$604,039.00"
IAH - BOS,52543755665,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52543755665,https://www.airlines-manager.com/aircraft/show/88400799,11:00,19:14,400,"$665,843.00","$604,039.00"
IAH - BOS,52551230553,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52551230553,https://www.airlines-manager.com/aircraft/show/88400801,12:00,20:14,400,"$665,843.00","$604,039.00"
IAH - BOS,52561334777,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52561334777,https://www.airlines-manager.com/aircraft/show/89233038,17:45,1:59,400,"$665,843.00","$604,039.00"
IAH - BOS,52566418031,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429011,https://www.airlines-manager.com/network/showflight/52566418031,https://www.airlines-manager.com/aircraft/show/88400798,18:30,2:44,377,"$643,011.00","$582,160.00"
IAH - BSB,52543755692,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52543755692,https://www.airlines-manager.com/aircraft/show/89124076,11:15,5:29,932,"$3,054,380.00","$2,786,446.00"
IAH - BSB,52566418200,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41559619,https://www.airlines-manager.com/network/showflight/52566418200,https://www.airlines-manager.com/aircraft/show/88905140,20:15,14:29,931,"$3,051,990.00","$2,784,207.00"
IAH - BTV,52529307870,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52529307870,https://www.airlines-manager.com/aircraft/show/86385103,0:00,8:14,310,"$515,356.00","$473,629.00"
IAH - BTV,52529307871,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52529307871,https://www.airlines-manager.com/aircraft/show/82543907,4:15,12:29,112,"$242,840.00","$215,065.00"
IAH - BTV,52529307872,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52529307872,https://www.airlines-manager.com/aircraft/show/114373409,7:15,15:29,310,"$515,356.00","$473,629.00"
IAH - BTV,52556327638,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52556327638,https://www.airlines-manager.com/aircraft/show/114373410,14:00,22:14,310,"$515,356.00","$473,629.00"
IAH - BTV,52566418058,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841709,https://www.airlines-manager.com/network/showflight/52566418058,https://www.airlines-manager.com/aircraft/show/113994196,18:45,2:59,310,"$515,356.00","$473,629.00"
IAH - BUF,52529308304,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52529308304,https://www.airlines-manager.com/aircraft/show/107467127,1:15,8:14,310,"$452,077.00","$413,410.00"
IAH - BUF,52529308305,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52529308305,https://www.airlines-manager.com/aircraft/show/107467128,4:00,10:59,310,"$452,077.00","$413,410.00"
IAH - BUF,52551230602,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52551230602,https://www.airlines-manager.com/aircraft/show/107467129,13:00,19:59,310,"$452,077.00","$413,410.00"
IAH - BUF,52561334705,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52561334705,https://www.airlines-manager.com/aircraft/show/110582843,17:00,23:59,198,"$341,249.00","$310,261.00"
IAH - BUF,52570802797,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824184,https://www.airlines-manager.com/network/showflight/52570802797,https://www.airlines-manager.com/aircraft/show/107467130,21:15,4:14,309,"$451,198.00","$412,566.00"
IAH - BWI,52529307887,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52529307887,https://www.airlines-manager.com/aircraft/show/106007215,0:15,6:59,338,"$466,195.00","$424,824.00"
IAH - BWI,52529307888,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52529307888,https://www.airlines-manager.com/aircraft/show/107543798,4:45,11:44,0,"$114,842.00","$84,124.00"
IAH - BWI,52543755654,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52543755654,https://www.airlines-manager.com/aircraft/show/106007214,11:00,17:44,338,"$466,195.00","$424,824.00"
IAH - BWI,52551230668,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52551230668,https://www.airlines-manager.com/aircraft/show/106007213,13:45,20:29,338,"$466,195.00","$424,824.00"
IAH - BWI,52556327715,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52556327715,https://www.airlines-manager.com/aircraft/show/106007217,14:45,21:29,338,"$466,195.00","$424,824.00"
IAH - BWI,52570802773,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225049,https://www.airlines-manager.com/network/showflight/52570802773,https://www.airlines-manager.com/aircraft/show/106007216,21:00,3:44,338,"$466,195.00","$424,824.00"
IAH - CAK,52529308761,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52529308761,https://www.airlines-manager.com/aircraft/show/113994196,3:00,9:14,310,"$391,689.00","$357,254.00"
IAH - CAK,52543755424,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52543755424,https://www.airlines-manager.com/aircraft/show/86385103,8:15,14:29,310,"$391,689.00","$357,254.00"
IAH - CAK,52551230583,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52551230583,https://www.airlines-manager.com/aircraft/show/82543907,13:00,19:14,112,"$185,112.00","$162,558.00"
IAH - CAK,52556327847,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52556327847,https://www.airlines-manager.com/aircraft/show/114373409,16:00,22:14,310,"$391,689.00","$357,254.00"
IAH - CAK,52570802878,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841720,https://www.airlines-manager.com/network/showflight/52570802878,https://www.airlines-manager.com/aircraft/show/114373410,22:15,4:29,290,"$376,280.00","$342,447.00"
IAH - CHS,52529308366,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52529308366,https://www.airlines-manager.com/aircraft/show/107467211,1:30,7:14,112,"$169,633.00","$148,476.00"
IAH - CHS,52529308367,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52529308367,https://www.airlines-manager.com/aircraft/show/107467131,3:30,9:14,310,"$357,666.00","$325,090.00"
IAH - CHS,52551230543,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52551230543,https://www.airlines-manager.com/aircraft/show/107467132,12:00,17:44,310,"$357,666.00","$325,090.00"
IAH - CHS,52561334745,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52561334745,https://www.airlines-manager.com/aircraft/show/107467133,17:15,22:59,310,"$357,666.00","$325,090.00"
IAH - CHS,52573805938,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824157,https://www.airlines-manager.com/network/showflight/52573805938,https://www.airlines-manager.com/aircraft/show/107467134,23:45,5:29,310,"$357,666.00","$325,090.00"
IAH - CLE,52529308574,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52529308574,https://www.airlines-manager.com/aircraft/show/103600702,2:00,8:14,310,"$399,356.00","$362,645.00"
IAH - CLE,52543755395,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52543755395,https://www.airlines-manager.com/aircraft/show/103600701,7:45,13:59,310,"$399,356.00","$362,645.00"
IAH - CLE,52556327612,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52556327612,https://www.airlines-manager.com/aircraft/show/103600700,14:00,20:14,310,"$399,356.00","$362,645.00"
IAH - CLE,52556327613,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52556327613,https://www.airlines-manager.com/aircraft/show/110582844,15:30,21:44,198,"$301,641.00","$272,225.00"
IAH - CLE,52566418094,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45495444,https://www.airlines-manager.com/network/showflight/52566418094,https://www.airlines-manager.com/aircraft/show/88725601,19:00,1:14,310,"$399,356.00","$362,645.00"
IAH - CLT,52529308888,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52529308888,https://www.airlines-manager.com/aircraft/show/93094697,3:45,9:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52543755556,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52543755556,https://www.airlines-manager.com/aircraft/show/93094698,10:00,15:44,310,"$360,219.00","$317,919.00"
IAH - CLT,52551230556,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52551230556,https://www.airlines-manager.com/aircraft/show/93100455,12:00,17:44,112,"$170,471.00","$143,500.00"
IAH - CLT,52561334685,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52561334685,https://www.airlines-manager.com/aircraft/show/93094699,16:45,22:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52566418038,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52566418038,https://www.airlines-manager.com/aircraft/show/93094695,18:45,0:29,310,"$360,219.00","$317,919.00"
IAH - CLT,52570802862,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42897996,https://www.airlines-manager.com/network/showflight/52570802862,https://www.airlines-manager.com/aircraft/show/93094696,22:00,3:44,310,"$360,219.00","$317,919.00"
IAH - CMH,52529309176,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52529309176,https://www.airlines-manager.com/aircraft/show/103882355,7:00,12:59,310,"$377,713.00","$342,446.00"
IAH - CMH,52543755656,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52543755656,https://www.airlines-manager.com/aircraft/show/103882358,11:00,16:59,310,"$377,713.00","$342,446.00"
IAH - CMH,52551230491,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52551230491,https://www.airlines-manager.com/aircraft/show/105099861,12:00,17:59,112,"$178,483.00","$155,603.00"
IAH - CMH,52566418107,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52566418107,https://www.airlines-manager.com/aircraft/show/103882357,19:15,1:14,310,"$377,713.00","$342,446.00"
IAH - CMH,52570802949,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594509,https://www.airlines-manager.com/network/showflight/52570802949,https://www.airlines-manager.com/aircraft/show/103882356,23:00,4:59,310,"$377,713.00","$342,446.00"
IAH - COS,52529308468,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52529308468,https://www.airlines-manager.com/aircraft/show/103882355,1:45,6:59,310,"$330,515.00","$297,600.00"
IAH - COS,52529308470,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52529308470,https://www.airlines-manager.com/aircraft/show/103882358,5:45,10:59,310,"$330,515.00","$297,600.00"
IAH - COS,52556327687,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52556327687,https://www.airlines-manager.com/aircraft/show/103882357,14:00,19:14,310,"$330,515.00","$297,600.00"
IAH - COS,52561334773,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52561334773,https://www.airlines-manager.com/aircraft/show/103882356,17:45,22:59,310,"$330,515.00","$297,600.00"
IAH - COS,52570802921,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594506,https://www.airlines-manager.com/network/showflight/52570802921,https://www.airlines-manager.com/aircraft/show/105099861,22:45,3:59,111,"$156,553.00","$135,427.00"
IAH - CUN,52529308299,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52529308299,https://www.airlines-manager.com/aircraft/show/106676235,1:00,5:59,648,"$623,212.00","$570,103.00"
IAH - CUN,52551230566,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52551230566,https://www.airlines-manager.com/aircraft/show/106676236,12:30,17:29,648,"$623,212.00","$570,103.00"
IAH - CUN,52566418211,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41805427,https://www.airlines-manager.com/network/showflight/52566418211,https://www.airlines-manager.com/aircraft/show/106676238,20:30,1:29,648,"$623,212.00","$570,103.00"
IAH - CVG,52529307988,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52529307988,https://www.airlines-manager.com/aircraft/show/99093332,0:15,5:44,320,"$346,528.00","$305,827.00"
IAH - CVG,52529307989,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52529307989,https://www.airlines-manager.com/aircraft/show/99093333,4:00,9:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52543755401,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52543755401,https://www.airlines-manager.com/aircraft/show/99093334,8:00,13:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52556327670,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52556327670,https://www.airlines-manager.com/aircraft/show/99093335,14:00,19:29,320,"$346,528.00","$305,827.00"
IAH - CVG,52556327671,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52556327671,https://www.airlines-manager.com/aircraft/show/101412921,15:45,21:14,0,"$108,250.00","$74,069.00"
IAH - CVG,52556327672,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44841050,https://www.airlines-manager.com/network/showflight/52556327672,https://www.airlines-manager.com/aircraft/show/106499070,16:00,21:29,198,"$262,899.00","$234,372.00"
IAH - DEN,52551230489,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52551230489,https://www.airlines-manager.com/aircraft/show/105562975,12:00,17:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52551230490,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52551230490,https://www.airlines-manager.com/aircraft/show/105562971,13:00,18:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52570802914,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52570802914,https://www.airlines-manager.com/aircraft/show/105562972,22:30,3:59,338,"$377,038.00","$323,804.00"
IAH - DEN,52570802915,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52570802915,https://www.airlines-manager.com/aircraft/show/105562973,23:00,4:29,338,"$377,038.00","$323,804.00"
IAH - DEN,52573805911,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52573805911,https://www.airlines-manager.com/aircraft/show/107543798,23:15,4:44,0,"$93,314.00","$57,257.00"
IAH - DEN,52573805912,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444690,https://www.airlines-manager.com/network/showflight/52573805912,https://www.airlines-manager.com/aircraft/show/105562974,23:30,4:59,338,"$377,038.00","$323,804.00"
IAH - DFW,52529308204,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52529308204,https://www.airlines-manager.com/aircraft/show/99093333,1:00,3:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52529308205,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52529308205,https://www.airlines-manager.com/aircraft/show/99093334,5:00,7:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52543755646,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52543755646,https://www.airlines-manager.com/aircraft/show/99093335,11:00,13:59,320,"$130,454.00","$82,860.00"
IAH - DFW,52551230517,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52551230517,https://www.airlines-manager.com/aircraft/show/96990010,12:00,14:59,112,"$58,275.00","$33,825.00"
IAH - DFW,52551230518,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52551230518,https://www.airlines-manager.com/aircraft/show/107543798,13:00,15:59,0,"$39,216.00","$14,254.00"
IAH - DFW,52551230519,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52551230519,https://www.airlines-manager.com/aircraft/show/106499070,13:00,15:59,198,"$98,071.00","$65,983.00"
IAH - DFW,52566418093,IAH-DFW,737-200,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52566418093,https://www.airlines-manager.com/aircraft/show/116859686,19:00,21:59,136,"$71,974.00","$40,537.00"
IAH - DFW,52570802807,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/41920952,https://www.airlines-manager.com/network/showflight/52570802807,https://www.airlines-manager.com/aircraft/show/99093332,21:15,0:14,320,"$118,377.00","$71,266.00"
IAH - DSM,52529308847,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52529308847,https://www.airlines-manager.com/aircraft/show/110424761,3:15,8:29,320,"$331,896.00","$296,966.00"
IAH - DSM,52543755472,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52543755472,https://www.airlines-manager.com/aircraft/show/110424758,8:45,13:59,320,"$331,896.00","$296,966.00"
IAH - DSM,52556327681,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52556327681,https://www.airlines-manager.com/aircraft/show/110424759,14:00,19:14,320,"$331,896.00","$296,966.00"
IAH - DSM,52566418028,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654556,https://www.airlines-manager.com/network/showflight/52566418028,https://www.airlines-manager.com/aircraft/show/110424760,18:30,23:44,320,"$331,896.00","$296,966.00"
IAH - DTW,52529308037,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52529308037,https://www.airlines-manager.com/aircraft/show/90183184,0:30,6:44,310,"$394,162.00","$349,405.00"
IAH - DTW,52529308038,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52529308038,https://www.airlines-manager.com/aircraft/show/90183180,2:30,8:44,310,"$394,162.00","$349,405.00"
IAH - DTW,52529308039,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52529308039,https://www.airlines-manager.com/aircraft/show/90183181,6:00,12:14,310,"$394,162.00","$349,405.00"
IAH - DTW,52551230652,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52551230652,https://www.airlines-manager.com/aircraft/show/90183182,13:00,19:14,310,"$394,162.00","$349,405.00"
IAH - DTW,52566418049,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52566418049,https://www.airlines-manager.com/aircraft/show/90183183,18:45,0:59,310,"$394,162.00","$349,405.00"
IAH - DTW,52566418050,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41960920,https://www.airlines-manager.com/network/showflight/52566418050,https://www.airlines-manager.com/aircraft/show/90140936,20:45,2:59,135,"$185,150.00","$156,673.00"
IAH - ELP,52529308874,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52529308874,https://www.airlines-manager.com/aircraft/show/104717245,3:30,8:14,310,"$299,531.00","$269,174.00"
IAH - ELP,52543755686,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52543755686,https://www.airlines-manager.com/aircraft/show/104717246,11:00,15:44,310,"$299,531.00","$269,174.00"
IAH - ELP,52561334694,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52561334694,https://www.airlines-manager.com/aircraft/show/104717247,16:45,21:29,310,"$299,531.00","$269,174.00"
IAH - ELP,52566418091,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52566418091,https://www.airlines-manager.com/aircraft/show/104743902,19:00,23:44,112,"$142,750.00","$123,373.00"
IAH - ELP,52570802864,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920394,https://www.airlines-manager.com/network/showflight/52570802864,https://www.airlines-manager.com/aircraft/show/104717244,22:00,2:44,310,"$299,531.00","$269,174.00"
IAH - EZE,52529308906,IAH 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52529308906,https://www.airlines-manager.com/aircraft/show/89439130,4:00,0:29,932,"$3,363,756.00","$3,066,494.00"
IAH - EZE,52529308907,IAH 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/41556672,https://www.airlines-manager.com/network/showflight/52529308907,https://www.airlines-manager.com/aircraft/show/89124075,5:30,1:59,932,"$3,363,756.00","$3,066,494.00"
IAH - FAR,52529308347,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52529308347,https://www.airlines-manager.com/aircraft/show/110424754,1:30,8:14,320,"$417,281.00","$376,834.00"
IAH - FAR,52529308348,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52529308348,https://www.airlines-manager.com/aircraft/show/110424755,4:15,10:59,320,"$417,281.00","$376,834.00"
IAH - FAR,52551230501,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52551230501,https://www.airlines-manager.com/aircraft/show/110424756,12:00,18:44,320,"$417,281.00","$376,834.00"
IAH - FAR,52570802866,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654615,https://www.airlines-manager.com/network/showflight/52570802866,https://www.airlines-manager.com/aircraft/show/110424757,22:00,4:44,320,"$417,281.00","$376,834.00"
IAH - FAT,52529308920,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52529308920,https://www.airlines-manager.com/aircraft/show/110424760,4:00,11:44,320,"$496,975.00","$451,522.00"
IAH - FAT,52556327682,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52556327682,https://www.airlines-manager.com/aircraft/show/110424761,14:00,21:44,320,"$496,975.00","$451,522.00"
IAH - FAT,52561334856,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52561334856,https://www.airlines-manager.com/aircraft/show/110424758,18:15,1:59,320,"$496,975.00","$451,522.00"
IAH - FAT,52573805917,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654561,https://www.airlines-manager.com/network/showflight/52573805917,https://www.airlines-manager.com/aircraft/show/110424759,23:30,7:14,318,"$492,650.00","$447,306.00"
IAH - FLL,52529308035,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52529308035,https://www.airlines-manager.com/aircraft/show/93094695,0:30,6:14,310,"$366,885.00","$329,657.00"
IAH - FLL,52529308036,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52529308036,https://www.airlines-manager.com/aircraft/show/93094696,3:45,9:29,310,"$366,885.00","$329,657.00"
IAH - FLL,52543755557,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52543755557,https://www.airlines-manager.com/aircraft/show/93094697,10:00,15:44,310,"$366,885.00","$329,657.00"
IAH - FLL,52556327820,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52556327820,https://www.airlines-manager.com/aircraft/show/93094698,15:45,21:29,310,"$366,885.00","$329,657.00"
IAH - FLL,52561334785,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52561334785,https://www.airlines-manager.com/aircraft/show/93100455,17:45,23:29,112,"$174,049.00","$150,029.00"
IAH - FLL,52570802913,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42890581,https://www.airlines-manager.com/network/showflight/52570802913,https://www.airlines-manager.com/aircraft/show/93094699,22:30,4:14,310,"$366,885.00","$329,657.00"
IAH - FSD,52529309042,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52529309042,https://www.airlines-manager.com/aircraft/show/110424757,4:45,10:29,320,"$361,755.00","$324,920.00"
IAH - FSD,52543755427,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52543755427,https://www.airlines-manager.com/aircraft/show/110424754,8:15,13:59,320,"$361,755.00","$324,920.00"
IAH - FSD,52543755428,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52543755428,https://www.airlines-manager.com/aircraft/show/110424755,11:00,16:44,320,"$361,755.00","$324,920.00"
IAH - FSD,52566418046,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654619,https://www.airlines-manager.com/network/showflight/52566418046,https://www.airlines-manager.com/aircraft/show/110424756,18:45,0:29,279,"$333,633.00","$297,838.00"
IAH - GDL,52529309041,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52529309041,https://www.airlines-manager.com/aircraft/show/114266977,4:45,9:59,400,"$437,939.00","$395,426.00"
IAH - GDL,52543755641,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52543755641,https://www.airlines-manager.com/aircraft/show/114266980,10:45,15:59,400,"$437,939.00","$395,426.00"
IAH - GDL,52551230521,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52551230521,https://www.airlines-manager.com/aircraft/show/114266979,12:00,17:14,400,"$437,939.00","$395,426.00"
IAH - GDL,52566418157,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842057,https://www.airlines-manager.com/network/showflight/52566418157,https://www.airlines-manager.com/aircraft/show/114266978,20:00,1:14,354,"$394,146.00","$352,857.00"
IAH - GIG,52529307834,IAH 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52529307834,https://www.airlines-manager.com/aircraft/show/88905140,0:00,20:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GIG,52529307835,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41556659,https://www.airlines-manager.com/network/showflight/52529307835,https://www.airlines-manager.com/aircraft/show/89124074,2:00,22:14,932,"$3,374,644.00","$3,071,999.00"
IAH - GRU,52529308184,IAH 56A-7 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52529308184,https://www.airlines-manager.com/aircraft/show/106676238,1:00,20:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,52543755658,IAH 56A-2 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52543755658,https://www.airlines-manager.com/aircraft/show/106676233,11:00,6:29,648,"$2,475,542.00","$2,305,900.00"
IAH - GRU,52561334715,IAH 56A-4 B,787-10,https://www.airlines-manager.com/network/showline/41769042,https://www.airlines-manager.com/network/showflight/52561334715,https://www.airlines-manager.com/aircraft/show/106676235,17:00,12:29,648,"$2,475,542.00","$2,305,900.00"
IAH - IAD,52529308864,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52529308864,https://www.airlines-manager.com/aircraft/show/105400635,3:30,10:14,112,"$198,826.00","$170,572.00"
IAH - IAD,52529308867,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52529308867,https://www.airlines-manager.com/aircraft/show/98578923,6:45,13:29,320,"$421,738.00","$372,154.00"
IAH - IAD,52543755540,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52543755540,https://www.airlines-manager.com/aircraft/show/98578920,9:45,16:29,320,"$421,738.00","$372,154.00"
IAH - IAD,52551230637,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52551230637,https://www.airlines-manager.com/aircraft/show/98578924,13:00,19:44,320,"$421,738.00","$372,154.00"
IAH - IAD,52561334841,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52561334841,https://www.airlines-manager.com/aircraft/show/98578921,18:00,0:44,320,"$421,738.00","$372,154.00"
IAH - IAD,52570802817,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653691,https://www.airlines-manager.com/network/showflight/52570802817,https://www.airlines-manager.com/aircraft/show/98578922,21:30,4:14,320,"$421,738.00","$372,154.00"
IAH - ICT,52543755539,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52543755539,https://www.airlines-manager.com/aircraft/show/110424761,9:45,13:59,320,"$249,865.00","$218,281.00"
IAH - ICT,52556327680,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52556327680,https://www.airlines-manager.com/aircraft/show/110424758,14:00,18:14,320,"$249,865.00","$218,281.00"
IAH - ICT,52566418109,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52566418109,https://www.airlines-manager.com/aircraft/show/110424759,19:15,23:29,320,"$249,865.00","$218,281.00"
IAH - ICT,52573805943,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654551,https://www.airlines-manager.com/network/showflight/52573805943,https://www.airlines-manager.com/aircraft/show/110424760,23:45,3:59,314,"$247,045.00","$215,549.00"
IAH - IND,52529307867,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52529307867,https://www.airlines-manager.com/aircraft/show/100684074,0:00,5:29,310,"$343,007.00","$309,141.00"
IAH - IND,52529307868,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52529307868,https://www.airlines-manager.com/aircraft/show/110582845,4:45,10:14,198,"$260,075.00","$232,946.00"
IAH - IND,52529307869,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52529307869,https://www.airlines-manager.com/aircraft/show/100684071,6:00,11:29,310,"$343,007.00","$309,141.00"
IAH - IND,52551230467,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52551230467,https://www.airlines-manager.com/aircraft/show/100684072,11:30,16:59,310,"$343,007.00","$309,141.00"
IAH - IND,52561334776,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170732,https://www.airlines-manager.com/network/showflight/52561334776,https://www.airlines-manager.com/aircraft/show/100684073,17:45,23:14,309,"$342,000.00","$308,163.00"
IAH - JAN,52529308021,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52529308021,https://www.airlines-manager.com/aircraft/show/110424756,0:30,3:59,320,"$176,845.00","$149,394.00"
IAH - JAN,52543755637,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52543755637,https://www.airlines-manager.com/aircraft/show/110424757,10:30,13:59,320,"$176,845.00","$149,394.00"
IAH - JAN,52556327686,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52556327686,https://www.airlines-manager.com/aircraft/show/110424754,14:00,17:29,320,"$176,845.00","$149,394.00"
IAH - JAN,52561334681,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654614,https://www.airlines-manager.com/network/showflight/52561334681,https://www.airlines-manager.com/aircraft/show/110424755,16:45,20:14,305,"$171,827.00","$144,517.00"
IAH - JAX,52529308752,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52529308752,https://www.airlines-manager.com/aircraft/show/104717247,3:00,8:14,310,"$336,752.00","$304,524.00"
IAH - JAX,52543755398,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52543755398,https://www.airlines-manager.com/aircraft/show/104743902,8:00,13:14,112,"$159,712.00","$138,952.00"
IAH - JAX,52543755399,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52543755399,https://www.airlines-manager.com/aircraft/show/104717244,11:00,16:14,310,"$336,752.00","$304,524.00"
IAH - JAX,52561334675,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52561334675,https://www.airlines-manager.com/aircraft/show/104717245,16:30,21:44,310,"$336,752.00","$304,524.00"
IAH - JAX,52570802794,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920385,https://www.airlines-manager.com/network/showflight/52570802794,https://www.airlines-manager.com/aircraft/show/104717246,21:15,2:29,310,"$336,752.00","$304,524.00"
IAH - JFK,52529308571,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52529308571,https://www.airlines-manager.com/aircraft/show/89233038,2:00,9:29,400,"$620,012.00","$546,703.00"
IAH - JFK,52543755659,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52543755659,https://www.airlines-manager.com/aircraft/show/88400798,11:00,18:29,400,"$620,012.00","$546,703.00"
IAH - JFK,52561334862,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52561334862,https://www.airlines-manager.com/aircraft/show/88400800,18:15,1:44,400,"$620,012.00","$546,703.00"
IAH - JFK,52566418097,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52566418097,https://www.airlines-manager.com/aircraft/show/88400799,19:15,2:44,400,"$620,012.00","$546,703.00"
IAH - JFK,52570802811,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429004,https://www.airlines-manager.com/network/showflight/52570802811,https://www.airlines-manager.com/aircraft/show/88400801,21:15,4:44,400,"$620,012.00","$546,703.00"
IAH - LAS,52529308913,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52529308913,https://www.airlines-manager.com/aircraft/show/96256511,4:00,10:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52529308914,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52529308914,https://www.airlines-manager.com/aircraft/show/96250652,5:00,11:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52529308915,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52529308915,https://www.airlines-manager.com/aircraft/show/96990010,5:15,11:59,112,"$201,562.00","$167,268.00"
IAH - LAS,52543755650,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52543755650,https://www.airlines-manager.com/aircraft/show/96177955,11:00,17:44,320,"$428,307.00","$366,826.00"
IAH - LAS,52556327725,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52556327725,https://www.airlines-manager.com/aircraft/show/95894466,14:45,21:29,320,"$428,307.00","$366,826.00"
IAH - LAS,52561334767,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52561334767,https://www.airlines-manager.com/aircraft/show/82323704,17:30,0:14,112,"$201,562.00","$167,268.00"
IAH - LAS,52566418223,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475884,https://www.airlines-manager.com/network/showflight/52566418223,https://www.airlines-manager.com/aircraft/show/96183549,20:45,3:29,319,"$425,838.00","$364,406.00"
IAH - LAX,52529308730,IAH-JFK-LAX 2,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52529308730,https://www.airlines-manager.com/aircraft/show/88400799,2:45,9:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52529308731,IAH-JFK-LAX 1,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52529308731,https://www.airlines-manager.com/aircraft/show/88400798,3:45,10:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52529308732,IAH-JFK-LAX 4,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52529308732,https://www.airlines-manager.com/aircraft/show/88400801,4:45,11:59,400,"$607,892.00","$535,719.00"
IAH - LAX,52543755635,IAH-JFK-LAX 5,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52543755635,https://www.airlines-manager.com/aircraft/show/89233038,10:30,17:44,400,"$607,892.00","$535,719.00"
IAH - LAX,52543755636,IAH-JFK-LAX 3,757-300,https://www.airlines-manager.com/network/showline/41429006,https://www.airlines-manager.com/network/showflight/52543755636,https://www.airlines-manager.com/aircraft/show/88400800,11:00,18:14,400,"$607,892.00","$535,719.00"
IAH - LEX,52529309032,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52529309032,https://www.airlines-manager.com/aircraft/show/114373410,4:30,9:44,310,"$333,424.00","$303,446.00"
IAH - LEX,52543755519,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52543755519,https://www.airlines-manager.com/aircraft/show/113994196,9:15,14:29,310,"$333,424.00","$303,446.00"
IAH - LEX,52556327782,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52556327782,https://www.airlines-manager.com/aircraft/show/86385103,15:00,20:14,310,"$333,424.00","$303,446.00"
IAH - LEX,52566418108,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52566418108,https://www.airlines-manager.com/aircraft/show/82543907,19:15,0:29,112,"$158,427.00","$138,994.00"
IAH - LEX,52570802876,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841727,https://www.airlines-manager.com/network/showflight/52570802876,https://www.airlines-manager.com/aircraft/show/114373409,22:15,3:29,262,"$302,986.00","$274,097.00"
IAH - LIM,52556327714,IAH 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52556327714,https://www.airlines-manager.com/aircraft/show/89439131,14:30,3:59,932,"$2,248,651.00","$2,048,806.00"
IAH - LIM,52573805942,IAH 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/41559632,https://www.airlines-manager.com/network/showflight/52573805942,https://www.airlines-manager.com/aircraft/show/89124074,23:45,13:14,932,"$2,248,651.00","$2,048,806.00"
IAH - LIT,52529308892,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52529308892,https://www.airlines-manager.com/aircraft/show/96692491,3:45,7:14,310,"$188,236.00","$164,230.00"
IAH - LIT,52543755673,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52543755673,https://www.airlines-manager.com/aircraft/show/96692343,11:00,14:29,310,"$188,236.00","$164,230.00"
IAH - LIT,52566418133,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52566418133,https://www.airlines-manager.com/aircraft/show/96691558,19:30,22:59,310,"$188,236.00","$164,230.00"
IAH - LIT,52566418134,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52566418134,https://www.airlines-manager.com/aircraft/show/106014350,20:00,23:29,198,"$142,058.00","$122,837.00"
IAH - LIT,52573805915,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46351097,https://www.airlines-manager.com/network/showflight/52573805915,https://www.airlines-manager.com/aircraft/show/96694086,23:30,2:59,271,"$174,275.00","$150,669.00"
IAH - MCI,52529308300,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52529308300,https://www.airlines-manager.com/aircraft/show/103882358,1:00,5:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52543755524,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52543755524,https://www.airlines-manager.com/aircraft/show/103882357,9:15,13:59,310,"$298,285.00","$267,127.00"
IAH - MCI,52551230624,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52551230624,https://www.airlines-manager.com/aircraft/show/103882356,13:00,17:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52561334847,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52561334847,https://www.airlines-manager.com/aircraft/show/105099861,18:00,22:44,112,"$141,262.00","$121,442.00"
IAH - MCI,52570802771,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52570802771,https://www.airlines-manager.com/aircraft/show/103882355,21:00,1:44,310,"$298,285.00","$267,127.00"
IAH - MCI,52570802772,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/45594512,https://www.airlines-manager.com/network/showflight/52570802772,https://www.airlines-manager.com/aircraft/show/101412921,21:15,1:59,0,"$90,672.00","$60,573.00"
IAH - MCO,52529308188,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52529308188,https://www.airlines-manager.com/aircraft/show/90183183,1:00,6:29,310,"$345,262.00","$302,868.00"
IAH - MCO,52529308189,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52529308189,https://www.airlines-manager.com/aircraft/show/90140936,3:00,8:29,136,"$164,393.00","$137,615.00"
IAH - MCO,52529308190,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52529308190,https://www.airlines-manager.com/aircraft/show/90183184,6:45,12:14,310,"$345,262.00","$302,868.00"
IAH - MCO,52543755481,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52543755481,https://www.airlines-manager.com/aircraft/show/90183180,8:45,14:14,310,"$345,262.00","$302,868.00"
IAH - MCO,52551230651,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52551230651,https://www.airlines-manager.com/aircraft/show/90183181,13:00,18:29,310,"$345,262.00","$302,868.00"
IAH - MCO,52566418118,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856116,https://www.airlines-manager.com/network/showflight/52566418118,https://www.airlines-manager.com/aircraft/show/90183182,19:15,0:44,310,"$345,262.00","$302,868.00"
IAH - MEM,52529308535,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52529308535,https://www.airlines-manager.com/aircraft/show/101412921,2:00,5:59,0,"$71,891.00","$43,948.00"
IAH - MEM,52529308537,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52529308537,https://www.airlines-manager.com/aircraft/show/99093332,5:45,9:44,320,"$221,673.00","$188,311.00"
IAH - MEM,52543755530,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52543755530,https://www.airlines-manager.com/aircraft/show/99093333,9:30,13:29,320,"$221,673.00","$188,311.00"
IAH - MEM,52556327669,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52556327669,https://www.airlines-manager.com/aircraft/show/99093334,14:00,17:59,320,"$221,673.00","$188,311.00"
IAH - MEM,52566418132,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52566418132,https://www.airlines-manager.com/aircraft/show/99093335,19:30,23:29,320,"$221,673.00","$188,311.00"
IAH - MEM,52570802823,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833769,https://www.airlines-manager.com/network/showflight/52570802823,https://www.airlines-manager.com/aircraft/show/106499070,21:30,1:29,198,"$168,278.00","$145,288.00"
IAH - MEX,52529308511,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52529308511,https://www.airlines-manager.com/aircraft/show/97026605,1:45,6:44,136,"$153,398.00","$128,497.00"
IAH - MEX,52529308513,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52529308513,https://www.airlines-manager.com/aircraft/show/97076945,5:30,10:29,400,"$414,005.00","$365,662.00"
IAH - MEX,52543755470,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52543755470,https://www.airlines-manager.com/aircraft/show/97076942,8:30,13:29,400,"$414,005.00","$365,662.00"
IAH - MEX,52551230650,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52551230650,https://www.airlines-manager.com/aircraft/show/97076946,13:00,17:59,400,"$414,005.00","$365,662.00"
IAH - MEX,52556327837,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52556327837,https://www.airlines-manager.com/aircraft/show/97076943,16:00,20:59,390,"$404,822.00","$356,728.00"
IAH - MEX,52570802899,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41979990,https://www.airlines-manager.com/network/showflight/52570802899,https://www.airlines-manager.com/aircraft/show/97076944,22:30,3:29,284,"$307,485.00","$262,023.00"
IAH - MHT,52529308362,IAH-MHT-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52529308362,https://www.airlines-manager.com/aircraft/show/114266971,1:30,9:44,320,"$523,320.00","$475,464.00"
IAH - MHT,52529308363,IAH-MHT-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52529308363,https://www.airlines-manager.com/aircraft/show/114266970,6:45,14:59,320,"$523,320.00","$475,464.00"
IAH - MHT,52551230510,IAH-MHT-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52551230510,https://www.airlines-manager.com/aircraft/show/114266972,12:00,20:14,320,"$523,320.00","$475,464.00"
IAH - MHT,52556327848,IAH-MHT-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52556327848,https://www.airlines-manager.com/aircraft/show/114266976,16:00,0:14,320,"$523,320.00","$475,464.00"
IAH - MHT,52561334782,IAH-MHT-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841849,https://www.airlines-manager.com/network/showflight/52561334782,https://www.airlines-manager.com/aircraft/show/92800067,17:45,1:59,112,"$246,686.00","$218,119.00"
IAH - MIA,52529308138,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52529308138,https://www.airlines-manager.com/aircraft/show/90183182,0:45,6:29,310,"$370,058.00","$324,301.00"
IAH - MIA,52529308139,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52529308139,https://www.airlines-manager.com/aircraft/show/90183183,6:30,12:14,310,"$370,058.00","$324,301.00"
IAH - MIA,52543755449,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52543755449,https://www.airlines-manager.com/aircraft/show/90140936,8:30,14:14,136,"$176,224.00","$147,256.00"
IAH - MIA,52551230654,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52551230654,https://www.airlines-manager.com/aircraft/show/90183184,13:00,18:44,310,"$370,058.00","$324,301.00"
IAH - MIA,52556327767,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52556327767,https://www.airlines-manager.com/aircraft/show/90183180,15:00,20:44,310,"$370,058.00","$324,301.00"
IAH - MIA,52566418013,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856105,https://www.airlines-manager.com/network/showflight/52566418013,https://www.airlines-manager.com/aircraft/show/90183181,18:30,0:14,309,"$369,356.00","$323,626.00"
IAH - MKE,52529308203,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52529308203,https://www.airlines-manager.com/aircraft/show/104258212,1:00,6:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52543755404,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52543755404,https://www.airlines-manager.com/aircraft/show/104258211,8:00,13:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52543755405,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52543755405,https://www.airlines-manager.com/aircraft/show/103534664,9:00,14:59,112,"$178,979.00","$156,179.00"
IAH - MKE,52556327621,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52556327621,https://www.airlines-manager.com/aircraft/show/104258214,14:00,19:59,310,"$379,007.00","$343,873.00"
IAH - MKE,52566418115,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45748027,https://www.airlines-manager.com/network/showflight/52566418115,https://www.airlines-manager.com/aircraft/show/104258213,19:15,1:14,310,"$379,007.00","$343,873.00"
IAH - MSO,52529308904,IAH-MSO-FAR 2,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52529308904,https://www.airlines-manager.com/aircraft/show/110424756,4:00,11:59,320,"$507,030.00","$460,597.00"
IAH - MSO,52556327679,IAH-MSO-FAR 1,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52556327679,https://www.airlines-manager.com/aircraft/show/110424757,14:00,21:59,320,"$507,030.00","$460,597.00"
IAH - MSO,52561334762,IAH-MSO-FAR 4,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52561334762,https://www.airlines-manager.com/aircraft/show/110424754,17:30,1:29,320,"$507,030.00","$460,597.00"
IAH - MSO,52566418192,IAH-MSO-FAR 3,737-900ER,https://www.airlines-manager.com/network/showline/47654624,https://www.airlines-manager.com/network/showflight/52566418192,https://www.airlines-manager.com/aircraft/show/110424755,20:15,4:14,320,"$507,030.00","$460,597.00"
IAH - MSP,52529308917,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52529308917,https://www.airlines-manager.com/aircraft/show/95894466,4:00,9:59,320,"$383,111.00","$333,815.00"
IAH - MSP,52529308918,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52529308918,https://www.airlines-manager.com/aircraft/show/82323704,5:00,11:14,112,"$181,949.00","$154,284.00"
IAH - MSP,52543755559,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52543755559,https://www.airlines-manager.com/aircraft/show/96183549,10:00,15:59,320,"$383,111.00","$333,815.00"
IAH - MSP,52561334780,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52561334780,https://www.airlines-manager.com/aircraft/show/96250652,17:45,23:44,320,"$383,111.00","$333,815.00"
IAH - MSP,52570802824,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52570802824,https://www.airlines-manager.com/aircraft/show/96256511,21:30,3:29,320,"$383,111.00","$333,815.00"
IAH - MSP,52570802825,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475907,https://www.airlines-manager.com/network/showflight/52570802825,https://www.airlines-manager.com/aircraft/show/96177955,22:30,4:29,320,"$383,111.00","$333,815.00"
IAH - MSY,52529308895,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52529308895,https://www.airlines-manager.com/aircraft/show/106007216,3:45,6:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52529308896,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52529308896,https://www.airlines-manager.com/aircraft/show/106007217,4:45,7:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52543755674,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52543755674,https://www.airlines-manager.com/aircraft/show/106007215,11:00,14:14,338,"$170,319.00","$145,672.00"
IAH - MSY,52561334770,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52561334770,https://www.airlines-manager.com/aircraft/show/106007214,17:45,20:59,338,"$170,319.00","$145,672.00"
IAH - MSY,52566418209,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44236349,https://www.airlines-manager.com/network/showflight/52566418209,https://www.airlines-manager.com/aircraft/show/106007213,20:30,23:44,263,"$147,870.00","$123,743.00"
IAH - MTY,52529308876,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52529308876,https://www.airlines-manager.com/aircraft/show/114266974,3:30,7:14,320,"$202,445.00","$171,928.00"
IAH - MTY,52543755518,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52543755518,https://www.airlines-manager.com/aircraft/show/105099862,9:15,12:59,112,"$92,515.00","$76,060.00"
IAH - MTY,52556327641,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52556327641,https://www.airlines-manager.com/aircraft/show/114266975,14:00,17:44,320,"$202,445.00","$171,928.00"
IAH - MTY,52561334768,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52561334768,https://www.airlines-manager.com/aircraft/show/113250059,17:30,21:14,320,"$202,445.00","$171,928.00"
IAH - MTY,52573805914,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842088,https://www.airlines-manager.com/network/showflight/52573805914,https://www.airlines-manager.com/aircraft/show/113114108,23:30,3:14,320,"$202,445.00","$171,928.00"
IAH - OAK,52529308333,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52529308333,https://www.airlines-manager.com/aircraft/show/98578920,1:15,9:44,320,"$528,557.00","$477,734.00"
IAH - OAK,52529308334,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52529308334,https://www.airlines-manager.com/aircraft/show/98578924,3:00,11:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52543755420,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52543755420,https://www.airlines-manager.com/aircraft/show/98578921,8:00,16:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52551230646,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52551230646,https://www.airlines-manager.com/aircraft/show/98578922,13:00,21:29,320,"$528,557.00","$477,734.00"
IAH - OAK,52566418088,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52566418088,https://www.airlines-manager.com/aircraft/show/105400635,19:00,3:29,112,"$249,254.00","$219,107.00"
IAH - OAK,52570802893,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653700,https://www.airlines-manager.com/network/showflight/52570802893,https://www.airlines-manager.com/aircraft/show/98578923,22:15,6:44,320,"$528,557.00","$477,734.00"
IAH - OKC,52529309066,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52529309066,https://www.airlines-manager.com/aircraft/show/107467134,5:30,9:14,310,"$196,426.00","$171,165.00"
IAH - OKC,52543755590,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52543755590,https://www.airlines-manager.com/aircraft/show/107467211,10:00,13:44,112,"$90,681.00","$74,834.00"
IAH - OKC,52551230538,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52551230538,https://www.airlines-manager.com/aircraft/show/107467131,12:00,15:44,310,"$196,426.00","$171,165.00"
IAH - OKC,52561334769,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52561334769,https://www.airlines-manager.com/aircraft/show/107467132,17:45,21:29,310,"$196,426.00","$171,165.00"
IAH - OKC,52570802946,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824165,https://www.airlines-manager.com/network/showflight/52570802946,https://www.airlines-manager.com/aircraft/show/107467133,23:00,2:44,310,"$196,426.00","$171,165.00"
IAH - OMA,52529308725,IAH-BOI-BNA 1,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52529308725,https://www.airlines-manager.com/aircraft/show/104258211,2:45,7:59,310,"$328,699.00","$297,556.00"
IAH - OMA,52529308726,IAH-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52529308726,https://www.airlines-manager.com/aircraft/show/103534664,3:45,8:59,112,"$156,004.00","$135,953.00"
IAH - OMA,52543755480,IAH-BOI-BNA 4,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52543755480,https://www.airlines-manager.com/aircraft/show/104258214,8:45,13:59,310,"$328,699.00","$297,556.00"
IAH - OMA,52556327618,IAH-BOI-BNA 3,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52556327618,https://www.airlines-manager.com/aircraft/show/104258213,14:00,19:14,310,"$328,699.00","$297,556.00"
IAH - OMA,52566418148,IAH-BOI-BNA 2,A321-200,https://www.airlines-manager.com/network/showline/45737497,https://www.airlines-manager.com/network/showflight/52566418148,https://www.airlines-manager.com/aircraft/show/104258212,19:45,0:59,310,"$328,699.00","$297,556.00"
IAH - ONT,52529308717,IAH-ANC-ONT 1,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52529308717,https://www.airlines-manager.com/aircraft/show/108258010,2:45,9:59,310,"$463,569.00","$422,403.00"
IAH - ONT,52529308718,IAH-ANC-ONT 2,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52529308718,https://www.airlines-manager.com/aircraft/show/108258011,4:45,11:59,310,"$463,569.00","$422,403.00"
IAH - ONT,52551230557,IAH-ANC-ONT 3,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52551230557,https://www.airlines-manager.com/aircraft/show/108258012,12:00,19:14,310,"$463,569.00","$422,403.00"
IAH - ONT,52556327607,IAH-ANC-ONT 4,A321-200,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52556327607,https://www.airlines-manager.com/aircraft/show/108089220,14:00,21:14,310,"$463,569.00","$422,403.00"
IAH - ONT,52556327608,IAH-ANC-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/47054836,https://www.airlines-manager.com/network/showflight/52556327608,https://www.airlines-manager.com/aircraft/show/108286957,16:00,23:14,197,"$348,956.00","$316,007.00"
IAH - ORD,52529307893,IAH-MIA-ORD 4,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52529307893,https://www.airlines-manager.com/aircraft/show/90183181,0:15,5:59,310,"$362,970.00","$308,004.00"
IAH - ORD,52529307974,IAH-MIA-ORD 3,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52529307974,https://www.airlines-manager.com/aircraft/show/90183182,6:30,12:14,310,"$362,970.00","$308,004.00"
IAH - ORD,52543755587,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52543755587,https://www.airlines-manager.com/aircraft/show/101412921,10:00,15:44,0,"$114,221.00","$60,777.00"
IAH - ORD,52551230653,IAH-MIA-ORD 2,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52551230653,https://www.airlines-manager.com/aircraft/show/90183183,13:00,18:44,310,"$362,970.00","$308,004.00"
IAH - ORD,52556327765,IAH-MIA-ORD 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52556327765,https://www.airlines-manager.com/aircraft/show/90140936,15:00,20:44,136,"$172,495.00","$138,059.00"
IAH - ORD,52566418052,IAH-MIA-ORD 1,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52566418052,https://www.airlines-manager.com/aircraft/show/90183184,18:45,0:29,310,"$362,970.00","$308,004.00"
IAH - ORD,52566418053,IAH-MIA-ORD 5,A321-200,https://www.airlines-manager.com/network/showline/41856090,https://www.airlines-manager.com/network/showflight/52566418053,https://www.airlines-manager.com/aircraft/show/90183180,20:45,2:29,310,"$362,970.00","$308,004.00"
IAH - ORF,52529307873,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52529307873,https://www.airlines-manager.com/aircraft/show/110582843,0:00,6:44,198,"$319,444.00","$289,791.00"
IAH - ORF,52529307874,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52529307874,https://www.airlines-manager.com/aircraft/show/107467130,4:15,10:59,310,"$423,177.00","$386,175.00"
IAH - ORF,52543755435,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52543755435,https://www.airlines-manager.com/aircraft/show/107467127,8:15,14:59,310,"$423,177.00","$386,175.00"
IAH - ORF,52551230601,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52551230601,https://www.airlines-manager.com/aircraft/show/107467128,13:00,19:44,310,"$423,177.00","$386,175.00"
IAH - ORF,52566418169,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824197,https://www.airlines-manager.com/network/showflight/52566418169,https://www.airlines-manager.com/aircraft/show/107467129,20:00,2:44,310,"$423,177.00","$386,175.00"
IAH - PBI,52529308685,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52529308685,https://www.airlines-manager.com/aircraft/show/104717246,2:30,8:14,310,"$369,178.00","$334,442.00"
IAH - PBI,52543755687,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52543755687,https://www.airlines-manager.com/aircraft/show/104717247,11:00,16:44,310,"$369,178.00","$334,442.00"
IAH - PBI,52551230661,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52551230661,https://www.airlines-manager.com/aircraft/show/104743902,13:15,18:59,112,"$174,677.00","$152,171.00"
IAH - PBI,52561334650,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52561334650,https://www.airlines-manager.com/aircraft/show/104717244,16:15,21:59,310,"$369,178.00","$334,442.00"
IAH - PBI,52570802850,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920408,https://www.airlines-manager.com/network/showflight/52570802850,https://www.airlines-manager.com/aircraft/show/104717245,21:45,3:29,310,"$369,178.00","$334,442.00"
IAH - PDX,52529308733,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52529308733,https://www.airlines-manager.com/aircraft/show/105562975,2:45,11:44,338,"$619,578.00","$571,476.00"
IAH - PDX,52529308734,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52529308734,https://www.airlines-manager.com/aircraft/show/105562972,4:00,12:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52529308735,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52529308735,https://www.airlines-manager.com/aircraft/show/105562974,5:00,13:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52551230488,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52551230488,https://www.airlines-manager.com/aircraft/show/105601215,12:00,21:14,112,"$269,817.00","$236,406.00"
IAH - PDX,52556327637,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52556327637,https://www.airlines-manager.com/aircraft/show/105562973,14:00,22:59,338,"$619,578.00","$571,476.00"
IAH - PDX,52566418020,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444686,https://www.airlines-manager.com/network/showflight/52566418020,https://www.airlines-manager.com/aircraft/show/105562971,18:30,3:29,337,"$617,900.00","$569,850.00"
IAH - PHL,52543755655,IAH-BWI-PHL 4,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52543755655,https://www.airlines-manager.com/aircraft/show/106007216,11:00,18:14,338,"$501,151.00","$455,969.00"
IAH - PHL,52556327705,IAH-BWI-PHL 3,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52556327705,https://www.airlines-manager.com/aircraft/show/106007215,14:15,21:29,338,"$501,151.00","$455,969.00"
IAH - PHL,52556327706,IAH CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52556327706,https://www.airlines-manager.com/aircraft/show/107543798,16:00,23:14,0,"$122,429.00","$88,998.00"
IAH - PHL,52570802775,IAH-BWI-PHL 2,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52570802775,https://www.airlines-manager.com/aircraft/show/106007214,21:00,4:14,338,"$501,151.00","$455,969.00"
IAH - PHL,52570802776,IAH-BWI-PHL 5,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52570802776,https://www.airlines-manager.com/aircraft/show/106007217,21:30,4:44,338,"$501,151.00","$455,969.00"
IAH - PHL,52573805936,IAH-BWI-PHL 1,A321neo,https://www.airlines-manager.com/network/showline/44225058,https://www.airlines-manager.com/network/showflight/52573805936,https://www.airlines-manager.com/aircraft/show/106007213,23:45,6:59,338,"$501,151.00","$455,969.00"
IAH - PHX,52529308908,IAH-LAS-ATL 3,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52529308908,https://www.airlines-manager.com/aircraft/show/96183549,4:00,9:59,320,"$378,995.00","$326,961.00"
IAH - PHX,52529308909,IAH-LAS-ATL 4,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52529308909,https://www.airlines-manager.com/aircraft/show/96177955,5:00,10:59,320,"$378,995.00","$326,961.00"
IAH - PHX,52551230468,IAH-LAS-ATL 6,ERJ-175,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52551230468,https://www.airlines-manager.com/aircraft/show/82323704,11:30,17:29,112,"$179,298.00","$150,347.00"
IAH - PHX,52551230469,IAH-LAS-ATL 2,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52551230469,https://www.airlines-manager.com/aircraft/show/96250652,11:45,17:44,320,"$378,995.00","$326,961.00"
IAH - PHX,52556327800,IAH-LAS-ATL 1,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52556327800,https://www.airlines-manager.com/aircraft/show/96256511,15:30,21:29,320,"$378,995.00","$326,961.00"
IAH - PHX,52570802821,IAH-LAS-ATL 5,737-900ER,https://www.airlines-manager.com/network/showline/41475904,https://www.airlines-manager.com/network/showflight/52570802821,https://www.airlines-manager.com/aircraft/show/95894466,21:30,3:29,319,"$377,869.00","$325,869.00"
IAH - PIT,52529309051,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52529309051,https://www.airlines-manager.com/aircraft/show/100684073,5:00,11:29,310,"$405,186.00","$366,822.00"
IAH - PIT,52543755691,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52543755691,https://www.airlines-manager.com/aircraft/show/100684074,11:15,17:44,310,"$405,186.00","$366,822.00"
IAH - PIT,52556327839,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52556327839,https://www.airlines-manager.com/aircraft/show/110582845,16:00,22:29,198,"$306,076.00","$275,337.00"
IAH - PIT,52561334746,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52561334746,https://www.airlines-manager.com/aircraft/show/100684071,17:15,23:44,310,"$405,186.00","$366,822.00"
IAH - PIT,52570802926,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172092,https://www.airlines-manager.com/network/showflight/52570802926,https://www.airlines-manager.com/aircraft/show/100684072,22:45,5:14,310,"$405,186.00","$366,822.00"
IAH - PVD,52529308727,IAH-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52529308727,https://www.airlines-manager.com/aircraft/show/107467129,2:45,10:59,310,"$516,118.00","$474,608.00"
IAH - PVD,52529308728,IAH-PVD-BUF 5 B,A319-100,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52529308728,https://www.airlines-manager.com/aircraft/show/110582843,6:45,14:59,198,"$388,968.00","$355,693.00"
IAH - PVD,52551230603,IAH-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52551230603,https://www.airlines-manager.com/aircraft/show/107467130,13:00,21:14,310,"$516,118.00","$474,608.00"
IAH - PVD,52561334712,IAH-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52561334712,https://www.airlines-manager.com/aircraft/show/107467127,17:00,1:14,310,"$516,118.00","$474,608.00"
IAH - PVD,52566418138,IAH-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/46824173,https://www.airlines-manager.com/network/showflight/52566418138,https://www.airlines-manager.com/aircraft/show/107467128,19:45,3:59,310,"$516,118.00","$474,608.00"
IAH - PVR,52529308762,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52529308762,https://www.airlines-manager.com/aircraft/show/105099862,3:00,8:29,112,"$166,452.00","$145,038.00"
IAH - PVR,52543755460,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52543755460,https://www.airlines-manager.com/aircraft/show/114266975,8:30,13:59,320,"$355,565.00","$317,931.00"
IAH - PVR,52551230554,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52551230554,https://www.airlines-manager.com/aircraft/show/113250059,12:00,17:29,320,"$355,565.00","$317,931.00"
IAH - PVR,52561334802,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52561334802,https://www.airlines-manager.com/aircraft/show/113114108,18:00,23:29,320,"$355,565.00","$317,931.00"
IAH - PVR,52570802863,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842082,https://www.airlines-manager.com/network/showflight/52570802863,https://www.airlines-manager.com/aircraft/show/114266974,22:00,3:29,320,"$355,565.00","$317,931.00"
IAH - PWM,52543755389,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52543755389,https://www.airlines-manager.com/aircraft/show/106014350,7:45,16:14,198,"$406,561.00","$372,377.00"
IAH - PWM,52543755390,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52543755390,https://www.airlines-manager.com/aircraft/show/96691558,11:00,19:29,310,"$539,915.00","$497,274.00"
IAH - PWM,52556327773,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52556327773,https://www.airlines-manager.com/aircraft/show/96694086,15:00,23:29,310,"$539,915.00","$497,274.00"
IAH - PWM,52566418110,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52566418110,https://www.airlines-manager.com/aircraft/show/96692491,19:15,3:44,310,"$539,915.00","$497,274.00"
IAH - PWM,52570802918,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335442,https://www.airlines-manager.com/network/showflight/52570802918,https://www.airlines-manager.com/aircraft/show/96692343,22:45,7:14,310,"$539,915.00","$497,274.00"
IAH - RDU,52529309057,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52529309057,https://www.airlines-manager.com/aircraft/show/100684072,5:15,11:29,310,"$388,617.00","$351,813.00"
IAH - RDU,52551230478,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52551230478,https://www.airlines-manager.com/aircraft/show/100684073,11:30,17:44,310,"$388,617.00","$351,813.00"
IAH - RDU,52561334775,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52561334775,https://www.airlines-manager.com/aircraft/show/100684074,17:45,23:59,310,"$388,617.00","$351,813.00"
IAH - RDU,52570802904,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52570802904,https://www.airlines-manager.com/aircraft/show/110582845,22:30,4:44,198,"$293,754.00","$264,265.00"
IAH - RDU,52573805930,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45172096,https://www.airlines-manager.com/network/showflight/52573805930,https://www.airlines-manager.com/aircraft/show/100684071,23:45,5:59,310,"$388,617.00","$351,813.00"
IAH - RIC,52529308729,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52529308729,https://www.airlines-manager.com/aircraft/show/107467133,2:45,9:14,310,"$416,466.00","$380,152.00"
IAH - RIC,52551230539,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52551230539,https://www.airlines-manager.com/aircraft/show/107467134,12:00,18:29,310,"$416,466.00","$380,152.00"
IAH - RIC,52551230540,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52551230540,https://www.airlines-manager.com/aircraft/show/107467211,13:45,20:14,112,"$195,922.00","$172,116.00"
IAH - RIC,52556327811,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52556327811,https://www.airlines-manager.com/aircraft/show/107467131,15:45,22:14,310,"$416,466.00","$380,152.00"
IAH - RIC,52570802827,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824134,https://www.airlines-manager.com/network/showflight/52570802827,https://www.airlines-manager.com/aircraft/show/107467132,21:30,3:59,310,"$416,466.00","$380,152.00"
IAH - RNO,52529308306,IAH-RNO-MCI 3,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52529308306,https://www.airlines-manager.com/aircraft/show/103882357,1:15,9:14,310,"$511,897.00","$468,789.00"
IAH - RNO,52529308307,IAH-RNO-MCI 5,ERJ-175,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52529308307,https://www.airlines-manager.com/aircraft/show/105099861,4:00,11:59,112,"$240,834.00","$212,302.00"
IAH - RNO,52529308308,IAH-RNO-MCI 2,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52529308308,https://www.airlines-manager.com/aircraft/show/103882356,5:00,12:59,310,"$511,897.00","$468,789.00"
IAH - RNO,52551230619,IAH-RNO-MCI 1,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52551230619,https://www.airlines-manager.com/aircraft/show/103882355,13:00,20:59,310,"$511,897.00","$468,789.00"
IAH - RNO,52561334727,IAH-RNO-MCI 4,A321-200,https://www.airlines-manager.com/network/showline/45594514,https://www.airlines-manager.com/network/showflight/52561334727,https://www.airlines-manager.com/aircraft/show/103882358,17:00,0:59,310,"$511,897.00","$468,789.00"
IAH - RSW,52529308736,IAH-PBI-RSW 4,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52529308736,https://www.airlines-manager.com/aircraft/show/104717244,2:45,8:14,310,"$349,426.00","$314,868.00"
IAH - RSW,52543755685,IAH-PBI-RSW 3,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52543755685,https://www.airlines-manager.com/aircraft/show/104717245,11:00,16:29,310,"$349,426.00","$314,868.00"
IAH - RSW,52556327816,IAH-PBI-RSW 2,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52556327816,https://www.airlines-manager.com/aircraft/show/104717246,15:45,21:14,310,"$349,426.00","$314,868.00"
IAH - RSW,52570802814,IAH-PBI-RSW 1,A321-200,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52570802814,https://www.airlines-manager.com/aircraft/show/104717247,21:30,2:59,310,"$349,426.00","$314,868.00"
IAH - RSW,52573805929,IAH-PBI-RSW 5,ERJ-175,https://www.airlines-manager.com/network/showline/45920413,https://www.airlines-manager.com/network/showflight/52573805929,https://www.airlines-manager.com/aircraft/show/104743902,23:45,5:14,112,"$165,368.00","$143,132.00"
IAH - SAN,52529308162,IAH-IAD-SAN 4,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52529308162,https://www.airlines-manager.com/aircraft/show/98578921,0:45,7:59,320,"$452,539.00","$405,198.00"
IAH - SAN,52529308163,IAH-IAD-SAN 3,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52529308163,https://www.airlines-manager.com/aircraft/show/98578922,4:15,11:29,320,"$452,539.00","$405,198.00"
IAH - SAN,52543755630,IAH-IAD-SAN 6,ERJ-175,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52543755630,https://www.airlines-manager.com/aircraft/show/105400635,10:15,17:29,112,"$214,307.00","$186,848.00"
IAH - SAN,52556327766,IAH-IAD-SAN 2,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52556327766,https://www.airlines-manager.com/aircraft/show/98578923,15:00,22:14,320,"$452,539.00","$405,198.00"
IAH - SAN,52561334805,IAH-IAD-SAN 5,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52561334805,https://www.airlines-manager.com/aircraft/show/98578920,18:00,1:14,320,"$452,539.00","$405,198.00"
IAH - SAN,52566418147,IAH-IAD-SAN 1,737-900ER,https://www.airlines-manager.com/network/showline/44653695,https://www.airlines-manager.com/network/showflight/52566418147,https://www.airlines-manager.com/aircraft/show/98578924,19:45,2:59,320,"$452,539.00","$405,198.00"
IAH - SAT,52529308352,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52529308352,https://www.airlines-manager.com/aircraft/show/106499070,1:30,4:14,198,"$90,213.00","$72,334.00"
IAH - SAT,52529308353,IAH CARGO 2,A320-200,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52529308353,https://www.airlines-manager.com/aircraft/show/101412921,6:00,8:44,0,"$44,000.00","$21,973.00"
IAH - SAT,52543755541,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52543755541,https://www.airlines-manager.com/aircraft/show/99093332,9:45,12:29,320,"$119,364.00","$93,000.00"
IAH - SAT,52556327668,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52556327668,https://www.airlines-manager.com/aircraft/show/99093333,14:00,16:44,320,"$119,364.00","$93,000.00"
IAH - SAT,52561334804,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52561334804,https://www.airlines-manager.com/aircraft/show/99093334,18:00,20:44,320,"$119,364.00","$93,000.00"
IAH - SAT,52573805926,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44833765,https://www.airlines-manager.com/network/showflight/52573805926,https://www.airlines-manager.com/aircraft/show/99093335,23:30,2:14,320,"$119,364.00","$93,000.00"
IAH - SAV,52529308543,IAH-FAT-SAV 4,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52529308543,https://www.airlines-manager.com/aircraft/show/110424758,2:00,7:29,320,"$342,442.00","$306,636.00"
IAH - SAV,52543755457,IAH-FAT-SAV 3,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52543755457,https://www.airlines-manager.com/aircraft/show/110424759,8:30,13:59,320,"$342,442.00","$306,636.00"
IAH - SAV,52551230595,IAH-FAT-SAV 2,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52551230595,https://www.airlines-manager.com/aircraft/show/110424760,13:00,18:29,320,"$342,442.00","$306,636.00"
IAH - SAV,52570802836,IAH-FAT-SAV 1,737-900ER,https://www.airlines-manager.com/network/showline/47654558,https://www.airlines-manager.com/network/showflight/52570802836,https://www.airlines-manager.com/aircraft/show/110424761,21:45,3:14,320,"$342,442.00","$306,636.00"
IAH - SCL,52529308360,IAH 56A-1 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52529308360,https://www.airlines-manager.com/aircraft/show/106676232,1:30,19:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,52529308361,IAH 56A-3 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52529308361,https://www.airlines-manager.com/aircraft/show/106676234,6:30,0:59,648,"$2,288,076.00","$2,131,960.00"
IAH - SCL,52561334758,IAH 56A-5 B,787-10,https://www.airlines-manager.com/network/showline/41776795,https://www.airlines-manager.com/network/showflight/52561334758,https://www.airlines-manager.com/aircraft/show/106676236,17:30,11:59,647,"$2,284,585.00","$2,128,615.00"
IAH - SDF,52529308916,IAH-RIC-SDF 3,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52529308916,https://www.airlines-manager.com/aircraft/show/107467132,4:00,9:14,310,"$328,829.00","$296,276.00"
IAH - SDF,52551230544,IAH-RIC-SDF 2,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52551230544,https://www.airlines-manager.com/aircraft/show/107467133,12:00,17:14,310,"$328,829.00","$296,276.00"
IAH - SDF,52566418024,IAH-RIC-SDF 1,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52566418024,https://www.airlines-manager.com/aircraft/show/107467134,18:30,23:44,310,"$328,829.00","$296,276.00"
IAH - SDF,52566418025,IAH-RIC-SDF 5,ERJ-175,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52566418025,https://www.airlines-manager.com/aircraft/show/107467211,20:15,1:29,112,"$156,147.00","$135,240.00"
IAH - SDF,52570802886,IAH-RIC-SDF 4,A321-200,https://www.airlines-manager.com/network/showline/46824149,https://www.airlines-manager.com/network/showflight/52570802886,https://www.airlines-manager.com/aircraft/show/107467131,22:15,3:29,310,"$328,829.00","$296,276.00"
IAH - SEA,52529308861,IAH-SEA-DEN 1,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52529308861,https://www.airlines-manager.com/aircraft/show/105562971,3:30,12:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52529308863,IAH-SEA-DEN 3,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52529308863,https://www.airlines-manager.com/aircraft/show/105562973,4:30,13:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52551230611,IAH-SEA-DEN 2,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52551230611,https://www.airlines-manager.com/aircraft/show/105562972,13:00,22:14,338,"$643,740.00","$588,382.00"
IAH - SEA,52556327636,IAH-SEA-DEN 4,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52556327636,https://www.airlines-manager.com/aircraft/show/105562974,14:00,23:14,338,"$643,740.00","$588,382.00"
IAH - SEA,52561334761,IAH-SEA-DEN 5,A321neo,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52561334761,https://www.airlines-manager.com/aircraft/show/105562975,17:30,2:44,338,"$643,740.00","$588,382.00"
IAH - SEA,52570802808,IAH-SEA-DEN 6,ERJ-175,https://www.airlines-manager.com/network/showline/41444678,https://www.airlines-manager.com/network/showflight/52570802808,https://www.airlines-manager.com/aircraft/show/105601215,21:15,6:44,111,"$277,610.00","$239,823.00"
IAH - SJC,52529308765,IAH-SJC-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52529308765,https://www.airlines-manager.com/aircraft/show/96694086,3:00,11:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52543755660,IAH-SJC-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52543755660,https://www.airlines-manager.com/aircraft/show/96692491,11:00,19:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52556327713,IAH-SJC-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52556327713,https://www.airlines-manager.com/aircraft/show/96692343,14:30,22:44,310,"$531,203.00","$485,574.00"
IAH - SJC,52570802950,IAH-SJC-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52570802950,https://www.airlines-manager.com/aircraft/show/96691558,23:00,7:14,310,"$531,203.00","$485,574.00"
IAH - SJC,52573805918,IAH-SJC-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/46335448,https://www.airlines-manager.com/network/showflight/52573805918,https://www.airlines-manager.com/aircraft/show/106014350,23:30,7:44,198,"$399,697.00","$363,125.00"
IAH - SJD,52529308482,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52529308482,https://www.airlines-manager.com/aircraft/show/114266975,1:45,7:44,320,"$380,891.00","$342,053.00"
IAH - SJD,52529308484,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52529308484,https://www.airlines-manager.com/aircraft/show/113250059,5:15,11:14,320,"$380,891.00","$342,053.00"
IAH - SJD,52551230555,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52551230555,https://www.airlines-manager.com/aircraft/show/113114108,12:00,17:59,320,"$380,891.00","$342,053.00"
IAH - SJD,52556327857,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52556327857,https://www.airlines-manager.com/aircraft/show/114266974,16:00,21:59,320,"$380,891.00","$342,053.00"
IAH - SJD,52570802752,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842079,https://www.airlines-manager.com/network/showflight/52570802752,https://www.airlines-manager.com/aircraft/show/105099862,21:00,2:59,108,"$173,444.00","$151,315.00"
IAH - SLC,52529308741,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52529308741,https://www.airlines-manager.com/aircraft/show/93094698,2:45,9:29,310,"$424,184.00","$380,697.00"
IAH - SLC,52529308742,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52529308742,https://www.airlines-manager.com/aircraft/show/93100455,4:45,11:29,112,"$199,593.00","$171,416.00"
IAH - SLC,52543755555,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52543755555,https://www.airlines-manager.com/aircraft/show/93094699,10:00,16:44,310,"$424,184.00","$380,697.00"
IAH - SLC,52551230552,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52551230552,https://www.airlines-manager.com/aircraft/show/93094695,12:00,18:44,310,"$424,184.00","$380,697.00"
IAH - SLC,52556327795,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52556327795,https://www.airlines-manager.com/aircraft/show/93094696,15:15,21:59,310,"$424,184.00","$380,697.00"
IAH - SLC,52570802774,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42839462,https://www.airlines-manager.com/network/showflight/52570802774,https://www.airlines-manager.com/aircraft/show/93094697,21:00,3:44,310,"$424,184.00","$380,697.00"
IAH - SMF,52529308582,IAH-SMF-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52529308582,https://www.airlines-manager.com/aircraft/show/99093335,2:15,10:29,320,"$529,858.00","$480,629.00"
IAH - SMF,52529308584,IAH-SMF-CVG 5 B,A319-100,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52529308584,https://www.airlines-manager.com/aircraft/show/106499070,4:15,12:29,198,"$399,196.00","$363,807.00"
IAH - SMF,52551230632,IAH-SMF-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52551230632,https://www.airlines-manager.com/aircraft/show/99093332,13:00,21:14,320,"$529,858.00","$480,629.00"
IAH - SMF,52561334690,IAH-SMF-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52561334690,https://www.airlines-manager.com/aircraft/show/99093333,16:45,0:59,320,"$529,858.00","$480,629.00"
IAH - SMF,52566418221,IAH-SMF-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/44844654,https://www.airlines-manager.com/network/showflight/52566418221,https://www.airlines-manager.com/aircraft/show/99093334,20:45,4:59,319,"$528,314.00","$479,139.00"
IAH - STL,52529308303,IAH-CLE-STL 4,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52529308303,https://www.airlines-manager.com/aircraft/show/88725601,1:15,5:59,310,"$299,774.00","$267,503.00"
IAH - STL,52543755438,IAH-CLE-STL 3,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52543755438,https://www.airlines-manager.com/aircraft/show/103600702,8:15,12:59,310,"$299,774.00","$267,503.00"
IAH - STL,52556327610,IAH-CLE-STL 2,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52556327610,https://www.airlines-manager.com/aircraft/show/103600701,14:00,18:44,310,"$299,774.00","$267,503.00"
IAH - STL,52556327611,IAH-LAS-STL,ERJ-175,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52556327611,https://www.airlines-manager.com/aircraft/show/96990010,15:00,19:44,112,"$142,540.00","$122,010.00"
IAH - STL,52566418198,IAH-CLE-STL 1,A321-200,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52566418198,https://www.airlines-manager.com/aircraft/show/103600700,20:15,0:59,310,"$299,774.00","$267,503.00"
IAH - STL,52570802849,IAH-CLE-STL 5 B,A319-100,https://www.airlines-manager.com/network/showline/45490332,https://www.airlines-manager.com/network/showflight/52570802849,https://www.airlines-manager.com/aircraft/show/110582844,21:45,2:29,198,"$227,799.00","$201,953.00"
IAH - TPA,52529309019,IAH-SLC-CLT 1,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52529309019,https://www.airlines-manager.com/aircraft/show/93094699,4:15,9:29,310,"$326,235.00","$291,013.00"
IAH - TPA,52529309020,IAH-SLC-CLT 5,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52529309020,https://www.airlines-manager.com/aircraft/show/93094695,6:15,11:29,310,"$326,235.00","$291,013.00"
IAH - TPA,52543755617,IAH-SLC-CLT 4,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52543755617,https://www.airlines-manager.com/aircraft/show/93094696,10:00,15:14,310,"$326,235.00","$291,013.00"
IAH - TPA,52556327819,IAH-SLC-CLT 3,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52556327819,https://www.airlines-manager.com/aircraft/show/93094697,15:45,20:59,310,"$326,235.00","$291,013.00"
IAH - TPA,52570802819,IAH-SLC-CLT 2,A321-200,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52570802819,https://www.airlines-manager.com/aircraft/show/93094698,21:30,2:44,310,"$326,235.00","$291,013.00"
IAH - TPA,52573805919,IAH-SLC-CLT 6,ERJ-175,https://www.airlines-manager.com/network/showline/42874411,https://www.airlines-manager.com/network/showflight/52573805919,https://www.airlines-manager.com/aircraft/show/93100455,23:30,4:44,107,"$152,063.00","$129,727.00"
IAH - TUL,52529308028,IAH-BTV-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52529308028,https://www.airlines-manager.com/aircraft/show/82543907,0:30,4:14,112,"$93,634.00","$77,420.00"
IAH - TUL,52529308029,IAH-BTV-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52529308029,https://www.airlines-manager.com/aircraft/show/114373409,3:30,7:14,310,"$202,736.00","$176,965.00"
IAH - TUL,52543755542,IAH-BTV-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52543755542,https://www.airlines-manager.com/aircraft/show/114373410,9:45,13:29,310,"$202,736.00","$176,965.00"
IAH - TUL,52556327783,IAH-BTV-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52556327783,https://www.airlines-manager.com/aircraft/show/113994196,15:00,18:44,310,"$202,736.00","$176,965.00"
IAH - TUL,52566418187,IAH-BTV-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48841734,https://www.airlines-manager.com/network/showflight/52566418187,https://www.airlines-manager.com/aircraft/show/86385103,20:15,23:59,310,"$202,736.00","$176,965.00"
IAH - TUS,52529309069,IAH-PIT-RDU 1,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52529309069,https://www.airlines-manager.com/aircraft/show/100684074,5:30,11:14,310,"$358,649.00","$324,570.00"
IAH - TUS,52543755625,IAH-PIT-RDU 5 B,A319-100,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52543755625,https://www.airlines-manager.com/aircraft/show/110582845,10:15,15:59,198,"$271,974.00","$244,671.00"
IAH - TUS,52551230477,IAH-PIT-RDU 4,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52551230477,https://www.airlines-manager.com/aircraft/show/100684071,11:30,17:14,310,"$358,649.00","$324,570.00"
IAH - TUS,52561334729,IAH-PIT-RDU 3,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52561334729,https://www.airlines-manager.com/aircraft/show/100684072,17:00,22:44,310,"$358,649.00","$324,570.00"
IAH - TUS,52573805904,IAH-PIT-RDU 2,A321-200,https://www.airlines-manager.com/network/showline/45170727,https://www.airlines-manager.com/network/showflight/52573805904,https://www.airlines-manager.com/aircraft/show/100684073,23:15,4:59,310,"$358,649.00","$324,570.00"
IAH - UIO,52529308024,IAH 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52529308024,https://www.airlines-manager.com/aircraft/show/89124076,0:30,11:14,932,"$1,794,530.00","$1,639,136.00"
IAH - UIO,52551230660,IAH 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/41572544,https://www.airlines-manager.com/network/showflight/52551230660,https://www.airlines-manager.com/aircraft/show/88905141,13:15,23:59,932,"$1,794,530.00","$1,639,136.00"
IAH - YOW,52529308830,IAH-YOW-SJD 2,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52529308830,https://www.airlines-manager.com/aircraft/show/113114108,3:15,11:14,320,"$508,648.00","$460,991.00"
IAH - YOW,52543755397,IAH-YOW-SJD 1,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52543755397,https://www.airlines-manager.com/aircraft/show/114266974,8:00,15:59,320,"$508,648.00","$460,991.00"
IAH - YOW,52551230584,IAH-YOW-SJD 5,ERJ-175,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52551230584,https://www.airlines-manager.com/aircraft/show/105099862,13:00,20:59,112,"$238,472.00","$210,267.00"
IAH - YOW,52561334778,IAH-YOW-SJD 4,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52561334778,https://www.airlines-manager.com/aircraft/show/114266975,17:45,1:44,320,"$508,648.00","$460,991.00"
IAH - YOW,52570802792,IAH-YOW-SJD 3,737-900ER,https://www.airlines-manager.com/network/showline/48842072,https://www.airlines-manager.com/network/showflight/52570802792,https://www.airlines-manager.com/aircraft/show/113250059,21:15,5:14,320,"$508,648.00","$460,991.00"
IAH - YUL,52529308164,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52529308164,https://www.airlines-manager.com/aircraft/show/114266980,0:45,8:44,400,"$682,212.00","$624,271.00"
IAH - YUL,52529308165,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52529308165,https://www.airlines-manager.com/aircraft/show/114266979,2:00,9:59,400,"$682,212.00","$624,271.00"
IAH - YUL,52551230525,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52551230525,https://www.airlines-manager.com/aircraft/show/114266978,12:00,19:59,400,"$682,212.00","$624,271.00"
IAH - YUL,52566418222,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842047,https://www.airlines-manager.com/network/showflight/52566418222,https://www.airlines-manager.com/aircraft/show/114266977,20:45,4:44,400,"$682,212.00","$624,271.00"
IAH - YVR,52529308206,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52529308206,https://www.airlines-manager.com/aircraft/show/97076946,1:00,10:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52529308207,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52529308207,https://www.airlines-manager.com/aircraft/show/97076943,4:00,13:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52551230648,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52551230648,https://www.airlines-manager.com/aircraft/show/97076944,13:00,22:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52556327828,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52556327828,https://www.airlines-manager.com/aircraft/show/97026605,16:00,1:44,136,"$285,782.00","$249,874.00"
IAH - YVR,52566418166,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52566418166,https://www.airlines-manager.com/aircraft/show/97076945,20:00,5:29,400,"$774,148.00","$706,086.00"
IAH - YVR,52570802943,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41988815,https://www.airlines-manager.com/network/showflight/52570802943,https://www.airlines-manager.com/aircraft/show/97076942,23:00,8:29,398,"$771,274.00","$703,327.00"
IAH - YYC,52529308319,IAH-YYC-YUL 2,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52529308319,https://www.airlines-manager.com/aircraft/show/114266978,1:15,9:59,400,"$742,545.00","$679,793.00"
IAH - YYC,52551230526,IAH-YYC-YUL 1,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52551230526,https://www.airlines-manager.com/aircraft/show/114266977,12:00,20:44,400,"$742,545.00","$679,793.00"
IAH - YYC,52556327856,IAH-YYC-YUL 4,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52556327856,https://www.airlines-manager.com/aircraft/show/114266980,16:00,0:44,400,"$742,545.00","$679,793.00"
IAH - YYC,52561334740,IAH-YYC-YUL 3,757-300,https://www.airlines-manager.com/network/showline/48842030,https://www.airlines-manager.com/network/showflight/52561334740,https://www.airlines-manager.com/aircraft/show/114266979,17:15,1:59,400,"$742,545.00","$679,793.00"
IAH - YYZ,52529308885,IAH-MEX-YYZ 3,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52529308885,https://www.airlines-manager.com/aircraft/show/97076944,3:30,10:29,400,"$572,330.00","$513,682.00"
IAH - YYZ,52529308886,IAH-MEX-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52529308886,https://www.airlines-manager.com/aircraft/show/97026605,6:45,13:44,136,"$211,389.00","$180,846.00"
IAH - YYZ,52551230649,IAH-MEX-YYZ 2,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52551230649,https://www.airlines-manager.com/aircraft/show/97076945,13:00,19:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52556327836,IAH-MEX-YYZ 5,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52556327836,https://www.airlines-manager.com/aircraft/show/97076942,16:00,22:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52561334844,IAH-MEX-YYZ 1,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52561334844,https://www.airlines-manager.com/aircraft/show/97076946,18:00,0:59,400,"$572,330.00","$513,682.00"
IAH - YYZ,52570802787,IAH-MEX-YYZ 4,757-300,https://www.airlines-manager.com/network/showline/41856128,https://www.airlines-manager.com/network/showflight/52570802787,https://www.airlines-manager.com/aircraft/show/97076943,21:00,3:59,400,"$572,330.00","$513,682.00"
MIA - ABQ,52529308322,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52529308322,https://www.airlines-manager.com/aircraft/show/97556721,1:15,9:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,52529308323,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52529308323,https://www.airlines-manager.com/aircraft/show/97556718,4:15,12:59,310,"$547,351.00","$499,510.00"
MIA - ABQ,52543755567,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52543755567,https://www.airlines-manager.com/aircraft/show/97556719,10:00,18:44,310,"$547,351.00","$499,510.00"
MIA - ABQ,52566418127,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52566418127,https://www.airlines-manager.com/aircraft/show/97556720,19:30,4:14,310,"$547,351.00","$499,510.00"
MIA - ABQ,52570802911,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372807,https://www.airlines-manager.com/network/showflight/52570802911,https://www.airlines-manager.com/aircraft/show/97556716,22:30,7:14,309,"$546,294.00","$498,499.00"
MIA - ACC,52556327699,MIA 84B-2 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52556327699,https://www.airlines-manager.com/aircraft/show/106676226,14:15,11:59,962,"$3,564,585.00","$3,254,272.00"
MIA - ACC,52570802919,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186738,https://www.airlines-manager.com/network/showflight/52570802919,https://www.airlines-manager.com/aircraft/show/106676228,22:45,20:29,962,"$3,564,585.00","$3,254,272.00"
MIA - ALB,52529308887,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52529308887,https://www.airlines-manager.com/aircraft/show/113101233,3:30,10:14,320,"$427,571.00","$386,197.00"
MIA - ALB,52551230587,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52551230587,https://www.airlines-manager.com/aircraft/show/113101230,13:00,19:44,320,"$427,571.00","$386,197.00"
MIA - ALB,52556327852,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52556327852,https://www.airlines-manager.com/aircraft/show/100049776,16:00,22:59,112,"$202,234.00","$177,971.00"
MIA - ALB,52566418190,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52566418190,https://www.airlines-manager.com/aircraft/show/111064081,20:15,2:59,320,"$427,571.00","$386,197.00"
MIA - ALB,52573805894,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487680,https://www.airlines-manager.com/network/showflight/52573805894,https://www.airlines-manager.com/aircraft/show/113101228,23:15,5:59,320,"$427,571.00","$386,197.00"
MIA - ALG,52561334714,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52561334714,https://www.airlines-manager.com/aircraft/show/106676231,17:00,12:29,962,"$3,237,825.00","$2,952,293.00"
MIA - ALG,52566418213,MIA 84B-5 E2,777-300,https://www.airlines-manager.com/network/showline/46538378,https://www.airlines-manager.com/network/showflight/52566418213,https://www.airlines-manager.com/aircraft/show/106676229,20:30,15:59,962,"$3,237,825.00","$2,952,293.00"
MIA - ANU,52529309085,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52529309085,https://www.airlines-manager.com/aircraft/show/110114297,6:30,13:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52543755440,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52543755440,https://www.airlines-manager.com/aircraft/show/110114298,8:30,15:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52551230508,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52551230508,https://www.airlines-manager.com/aircraft/show/110114295,12:00,19:14,228,"$355,365.00","$324,682.00"
MIA - ANU,52551230509,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52551230509,https://www.airlines-manager.com/aircraft/show/110114296,13:00,20:14,228,"$355,365.00","$324,682.00"
MIA - ANU,52561334661,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52561334661,https://www.airlines-manager.com/aircraft/show/110114300,16:30,23:44,228,"$355,365.00","$324,682.00"
MIA - ANU,52573805923,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559658,https://www.airlines-manager.com/network/showflight/52573805923,https://www.airlines-manager.com/aircraft/show/110114299,23:30,6:44,227,"$354,006.00","$323,375.00"
MIA - ATL,52551230492,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52551230492,https://www.airlines-manager.com/aircraft/show/91126652,12:00,16:29,400,"$365,053.00","$300,808.00"
MIA - ATL,52551230493,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52551230493,https://www.airlines-manager.com/aircraft/show/91126650,13:00,17:29,400,"$365,053.00","$300,808.00"
MIA - ATL,52566418119,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52566418119,https://www.airlines-manager.com/aircraft/show/91126649,19:30,23:59,400,"$365,053.00","$300,808.00"
MIA - ATL,52570802770,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257954,https://www.airlines-manager.com/network/showflight/52570802770,https://www.airlines-manager.com/aircraft/show/91126651,21:00,1:29,400,"$365,053.00","$300,808.00"
MIA - AUA,52529308767,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52529308767,https://www.airlines-manager.com/aircraft/show/107121795,3:00,9:29,320,"$403,619.00","$363,799.00"
MIA - AUA,52529308768,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52529308768,https://www.airlines-manager.com/aircraft/show/107121798,4:30,10:59,320,"$403,619.00","$363,799.00"
MIA - AUA,52543755690,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52543755690,https://www.airlines-manager.com/aircraft/show/107121797,11:00,17:29,320,"$403,619.00","$363,799.00"
MIA - AUA,52561334784,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52561334784,https://www.airlines-manager.com/aircraft/show/107121796,17:45,0:14,320,"$403,619.00","$363,799.00"
MIA - AUA,52570802837,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704488,https://www.airlines-manager.com/network/showflight/52570802837,https://www.airlines-manager.com/aircraft/show/107121799,21:45,4:14,241,"$313,385.00","$276,584.00"
MIA - AUS,52529308740,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52529308740,https://www.airlines-manager.com/aircraft/show/99920625,2:45,9:14,320,"$402,200.00","$358,501.00"
MIA - AUS,52543755571,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52543755571,https://www.airlines-manager.com/aircraft/show/99920626,10:00,16:29,320,"$402,200.00","$358,501.00"
MIA - AUS,52556327664,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52556327664,https://www.airlines-manager.com/aircraft/show/82323689,14:00,20:29,112,"$189,839.00","$164,780.00"
MIA - AUS,52556327665,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52556327665,https://www.airlines-manager.com/aircraft/show/99920623,14:45,21:14,320,"$402,200.00","$358,501.00"
MIA - AUS,52566418226,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971964,https://www.airlines-manager.com/network/showflight/52566418226,https://www.airlines-manager.com/aircraft/show/99920624,20:45,3:14,320,"$402,200.00","$358,501.00"
MIA - BDA,52529308750,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52529308750,https://www.airlines-manager.com/aircraft/show/104034457,3:00,9:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52529308751,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52529308751,https://www.airlines-manager.com/aircraft/show/104034459,3:45,9:59,228,"$294,946.00","$267,420.00"
MIA - BDA,52543755584,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52543755584,https://www.airlines-manager.com/aircraft/show/104034460,10:00,16:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52543755585,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52543755585,https://www.airlines-manager.com/aircraft/show/99326789,11:00,17:14,228,"$294,946.00","$267,420.00"
MIA - BDA,52556327817,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52556327817,https://www.airlines-manager.com/aircraft/show/104034461,15:45,21:59,228,"$294,946.00","$267,420.00"
MIA - BDA,52570802804,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193835,https://www.airlines-manager.com/network/showflight/52570802804,https://www.airlines-manager.com/aircraft/show/104034458,21:15,3:29,228,"$294,946.00","$267,420.00"
MIA - BDL,52529308754,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52529308754,https://www.airlines-manager.com/aircraft/show/107763565,3:00,9:44,320,"$426,144.00","$383,863.00"
MIA - BDL,52543755415,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52543755415,https://www.airlines-manager.com/aircraft/show/107467213,8:00,14:44,112,"$200,552.00","$175,925.00"
MIA - BDL,52551230669,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52551230669,https://www.airlines-manager.com/aircraft/show/107763561,13:45,20:29,320,"$426,144.00","$383,863.00"
MIA - BDL,52556327678,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52556327678,https://www.airlines-manager.com/aircraft/show/107763566,14:00,20:44,320,"$426,144.00","$383,863.00"
MIA - BDL,52566418216,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909505,https://www.airlines-manager.com/network/showflight/52566418216,https://www.airlines-manager.com/aircraft/show/107763562,20:30,3:14,320,"$426,144.00","$383,863.00"
MIA - BFF,52566418229,MIA-PSP-BFF 4,737-900ER,https://www.airlines-manager.com/network/showline/49492826,https://www.airlines-manager.com/network/showflight/52566418229,https://www.airlines-manager.com/aircraft/show/116789631,20:45,5:29,320,"$554,080.00","$503,917.00"
MIA - BGI,52529308744,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52529308744,https://www.airlines-manager.com/aircraft/show/107121796,2:45,10:59,320,"$515,730.00","$466,906.00"
MIA - BGI,52529308745,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52529308745,https://www.airlines-manager.com/aircraft/show/107121799,6:45,14:59,320,"$515,730.00","$466,906.00"
MIA - BGI,52551230546,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52551230546,https://www.airlines-manager.com/aircraft/show/107121795,12:00,20:14,320,"$515,730.00","$466,906.00"
MIA - BGI,52551230547,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52551230547,https://www.airlines-manager.com/aircraft/show/107121798,13:30,21:44,320,"$515,730.00","$466,906.00"
MIA - BGI,52566418175,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704471,https://www.airlines-manager.com/network/showflight/52566418175,https://www.airlines-manager.com/aircraft/show/107121797,20:00,4:14,320,"$515,730.00","$466,906.00"
MIA - BHM,52529308894,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52529308894,https://www.airlines-manager.com/aircraft/show/116789651,3:45,8:29,310,"$301,579.00","$272,401.00"
MIA - BHM,52543755564,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52543755564,https://www.airlines-manager.com/aircraft/show/116789652,10:00,14:44,310,"$301,579.00","$272,401.00"
MIA - BHM,52561334737,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52561334737,https://www.airlines-manager.com/aircraft/show/116789653,17:15,21:59,310,"$301,579.00","$272,401.00"
MIA - BHM,52570802929,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493176,https://www.airlines-manager.com/network/showflight/52570802929,https://www.airlines-manager.com/aircraft/show/116789650,22:45,3:29,310,"$301,579.00","$272,401.00"
MIA - BIL,52556327629,MIA-BIL-BZN 3,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52556327629,https://www.airlines-manager.com/aircraft/show/116789627,14:00,0:14,320,"$631,183.00","$575,691.00"
MIA - BIL,52570802828,MIA-BIL-BZN 4,737-900ER,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52570802828,https://www.airlines-manager.com/aircraft/show/116789626,21:30,7:44,320,"$631,183.00","$575,691.00"
MIA - BIL,52573805947,MIA-BIL-BZN 5,ERJ-175,https://www.airlines-manager.com/network/showline/49492898,https://www.airlines-manager.com/network/showflight/52573805947,https://www.airlines-manager.com/aircraft/show/116042637,23:45,9:59,112,"$296,829.00","$263,017.00"
MIA - BNA,52529308145,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52529308145,https://www.airlines-manager.com/aircraft/show/103534663,0:45,5:59,112,"$157,179.00","$135,701.00"
MIA - BNA,52529308146,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52529308146,https://www.airlines-manager.com/aircraft/show/103775657,1:15,6:29,320,"$330,681.00","$292,430.00"
MIA - BNA,52529308147,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52529308147,https://www.airlines-manager.com/aircraft/show/104020880,4:45,9:59,320,"$330,681.00","$292,430.00"
MIA - BNA,52543755607,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52543755607,https://www.airlines-manager.com/aircraft/show/104022609,10:00,15:14,320,"$330,681.00","$292,430.00"
MIA - BNA,52551230531,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52551230531,https://www.airlines-manager.com/aircraft/show/103534663,12:00,17:14,112,"$157,179.00","$135,701.00"
MIA - BNA,52570802805,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701836,https://www.airlines-manager.com/network/showflight/52570802805,https://www.airlines-manager.com/aircraft/show/104133006,21:15,2:29,320,"$330,681.00","$292,430.00"
MIA - BOI,52529308466,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52529308466,https://www.airlines-manager.com/aircraft/show/106339154,1:45,12:59,198,"$523,140.00","$479,271.00"
MIA - BOI,52543755608,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52543755608,https://www.airlines-manager.com/aircraft/show/104133006,10:00,21:14,320,"$695,155.00","$635,003.00"
MIA - BOI,52556327649,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52556327649,https://www.airlines-manager.com/aircraft/show/103775657,14:00,1:14,320,"$695,155.00","$635,003.00"
MIA - BOI,52561334756,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52561334756,https://www.airlines-manager.com/aircraft/show/104020880,17:30,4:44,320,"$695,155.00","$635,003.00"
MIA - BOI,52570802937,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701907,https://www.airlines-manager.com/network/showflight/52570802937,https://www.airlines-manager.com/aircraft/show/104022609,22:45,9:59,320,"$695,155.00","$635,003.00"
MIA - BOS,52529308529,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52529308529,https://www.airlines-manager.com/aircraft/show/91352059,2:00,8:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52529308533,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52529308533,https://www.airlines-manager.com/aircraft/show/91352063,5:00,11:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52543755693,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52543755693,https://www.airlines-manager.com/aircraft/show/91352060,11:15,18:14,310,"$443,914.00","$399,505.00"
MIA - BOS,52561334671,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52561334671,https://www.airlines-manager.com/aircraft/show/91352062,16:30,23:29,310,"$443,914.00","$399,505.00"
MIA - BOS,52566418082,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52566418082,https://www.airlines-manager.com/aircraft/show/91352061,19:00,1:59,310,"$443,914.00","$399,505.00"
MIA - BOS,52566418083,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307221,https://www.airlines-manager.com/network/showflight/52566418083,https://www.airlines-manager.com/aircraft/show/110582841,20:15,3:14,198,"$335,745.00","$300,164.00"
MIA - BTV,52529308757,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52529308757,https://www.airlines-manager.com/aircraft/show/111064081,3:00,10:14,320,"$459,337.00","$416,465.00"
MIA - BTV,52543755488,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52543755488,https://www.airlines-manager.com/aircraft/show/113101228,8:45,15:59,320,"$459,337.00","$416,465.00"
MIA - BTV,52551230586,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52551230586,https://www.airlines-manager.com/aircraft/show/113101233,13:00,20:14,320,"$459,337.00","$416,465.00"
MIA - BTV,52566418144,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52566418144,https://www.airlines-manager.com/aircraft/show/113101230,19:45,2:59,320,"$459,337.00","$416,465.00"
MIA - BTV,52570802954,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487638,https://www.airlines-manager.com/network/showflight/52570802954,https://www.airlines-manager.com/aircraft/show/100049776,23:00,6:29,109,"$215,636.00","$190,440.00"
MIA - BUF,52529308769,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52529308769,https://www.airlines-manager.com/aircraft/show/107763561,3:00,9:44,320,"$424,000.00","$382,185.00"
MIA - BUF,52529308770,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52529308770,https://www.airlines-manager.com/aircraft/show/107763566,3:15,9:59,320,"$424,000.00","$382,185.00"
MIA - BUF,52543755682,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52543755682,https://www.airlines-manager.com/aircraft/show/107763562,11:00,17:44,320,"$424,000.00","$382,185.00"
MIA - BUF,52561334765,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52561334765,https://www.airlines-manager.com/aircraft/show/107763565,17:30,0:14,320,"$424,000.00","$382,185.00"
MIA - BUF,52570802810,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909524,https://www.airlines-manager.com/network/showflight/52570802810,https://www.airlines-manager.com/aircraft/show/107467213,21:15,3:59,112,"$199,563.00","$175,195.00"
MIA - BUR,52529308743,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52529308743,https://www.airlines-manager.com/aircraft/show/108834806,2:45,13:59,310,"$700,984.00","$648,079.00"
MIA - BUR,52543755667,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52543755667,https://www.airlines-manager.com/aircraft/show/108834803,11:00,22:14,310,"$700,984.00","$648,079.00"
MIA - BUR,52556327605,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52556327605,https://www.airlines-manager.com/aircraft/show/108834805,14:00,1:14,310,"$700,984.00","$648,079.00"
MIA - BUR,52566418171,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52566418171,https://www.airlines-manager.com/aircraft/show/108834807,20:00,7:14,198,"$525,891.00","$483,466.00"
MIA - BUR,52566418172,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/46909485,https://www.airlines-manager.com/network/showflight/52566418172,https://www.airlines-manager.com/aircraft/show/108834804,20:45,7:59,310,"$700,984.00","$648,079.00"
MIA - BWI,52529308910,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52529308910,https://www.airlines-manager.com/aircraft/show/92153442,4:00,9:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52529308911,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52529308911,https://www.airlines-manager.com/aircraft/show/92153439,6:00,11:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52543755554,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52543755554,https://www.airlines-manager.com/aircraft/show/92153443,10:00,15:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52551230656,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52551230656,https://www.airlines-manager.com/aircraft/show/92153440,13:00,18:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52570802759,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52570802759,https://www.airlines-manager.com/aircraft/show/92153441,21:00,2:44,310,"$364,180.00","$325,871.00"
MIA - BWI,52570802760,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608062,https://www.airlines-manager.com/network/showflight/52570802760,https://www.airlines-manager.com/aircraft/show/92137503,23:00,4:44,84,"$120,344.00","$99,626.00"
MIA - BZN,52566418185,MIA-BIL-BZN 1,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52566418185,https://www.airlines-manager.com/aircraft/show/116789629,20:15,6:44,320,"$653,658.00","$597,462.00"
MIA - BZN,52570802891,MIA-BIL-BZN 2,737-900ER,https://www.airlines-manager.com/network/showline/49492900,https://www.airlines-manager.com/network/showflight/52570802891,https://www.airlines-manager.com/aircraft/show/116789628,22:15,8:44,320,"$653,658.00","$597,462.00"
MIA - CAK,52529308546,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52529308546,https://www.airlines-manager.com/aircraft/show/115493370,2:00,8:14,310,"$383,460.00","$349,690.00"
MIA - CAK,52543755429,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52543755429,https://www.airlines-manager.com/aircraft/show/115493371,8:15,14:29,310,"$383,460.00","$349,690.00"
MIA - CAK,52543755430,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52543755430,https://www.airlines-manager.com/aircraft/show/115493372,11:00,17:14,310,"$383,460.00","$349,690.00"
MIA - CAK,52561334795,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52561334795,https://www.airlines-manager.com/aircraft/show/114912307,18:00,0:14,112,"$181,123.00","$159,033.00"
MIA - CAK,52570802762,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235011,https://www.airlines-manager.com/network/showflight/52570802762,https://www.airlines-manager.com/aircraft/show/115493373,21:00,3:14,272,"$355,602.00","$322,922.00"
MIA - CHS,52529308771,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52529308771,https://www.airlines-manager.com/aircraft/show/94886626,3:15,7:14,310,"$224,993.00","$199,001.00"
MIA - CHS,52529308772,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52529308772,https://www.airlines-manager.com/aircraft/show/107577220,4:15,8:14,0,"$60,643.00","$43,071.00"
MIA - CHS,52543755497,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52543755497,https://www.airlines-manager.com/aircraft/show/96692674,9:00,12:59,310,"$224,993.00","$199,001.00"
MIA - CHS,52543755498,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52543755498,https://www.airlines-manager.com/aircraft/show/105601657,11:00,14:59,112,"$104,581.00","$88,129.00"
MIA - CHS,52556327655,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52556327655,https://www.airlines-manager.com/aircraft/show/94886625,14:00,17:59,310,"$224,993.00","$199,001.00"
MIA - CHS,52566418227,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376123,https://www.airlines-manager.com/network/showflight/52566418227,https://www.airlines-manager.com/aircraft/show/94886629,20:45,0:44,289,"$196,956.00","$172,457.00"
MIA - CID,52529308326,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52529308326,https://www.airlines-manager.com/aircraft/show/116789652,1:15,8:29,310,"$453,780.00","$416,321.00"
MIA - CID,52543755565,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52543755565,https://www.airlines-manager.com/aircraft/show/116789653,10:00,17:14,310,"$453,780.00","$416,321.00"
MIA - CID,52556327802,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52556327802,https://www.airlines-manager.com/aircraft/show/116789650,15:30,22:44,310,"$453,780.00","$416,321.00"
MIA - CID,52566418217,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493171,https://www.airlines-manager.com/network/showflight/52566418217,https://www.airlines-manager.com/aircraft/show/116789651,20:30,3:44,310,"$453,780.00","$416,321.00"
MIA - CLE,52529308030,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52529308030,https://www.airlines-manager.com/aircraft/show/103534665,0:30,6:44,112,"$187,986.00","$164,202.00"
MIA - CLE,52529308031,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52529308031,https://www.airlines-manager.com/aircraft/show/103684630,4:15,10:29,320,"$398,409.00","$357,152.00"
MIA - CLE,52543755394,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52543755394,https://www.airlines-manager.com/aircraft/show/103365574,7:45,13:59,320,"$398,409.00","$357,152.00"
MIA - CLE,52551230620,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52551230620,https://www.airlines-manager.com/aircraft/show/103684632,13:00,19:14,320,"$398,409.00","$357,152.00"
MIA - CLE,52566418219,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553091,https://www.airlines-manager.com/network/showflight/52566418219,https://www.airlines-manager.com/aircraft/show/103684631,20:45,2:59,319,"$397,641.00","$356,413.00"
MIA - CLT,52529308929,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52529308929,https://www.airlines-manager.com/aircraft/show/82543123,4:15,8:59,112,"$142,203.00","$118,296.00"
MIA - CLT,52543755549,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52543755549,https://www.airlines-manager.com/aircraft/show/91600939,10:00,14:44,310,"$298,639.00","$260,690.00"
MIA - CLT,52556327853,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52556327853,https://www.airlines-manager.com/aircraft/show/91600936,16:00,20:44,310,"$298,639.00","$260,690.00"
MIA - CLT,52561334774,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52561334774,https://www.airlines-manager.com/aircraft/show/91600937,17:45,22:29,310,"$298,639.00","$260,690.00"
MIA - CLT,52570802900,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52570802900,https://www.airlines-manager.com/aircraft/show/91600935,22:30,3:14,310,"$298,639.00","$260,690.00"
MIA - CLT,52573805913,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379428,https://www.airlines-manager.com/network/showflight/52573805913,https://www.airlines-manager.com/aircraft/show/91600938,23:30,4:14,310,"$298,639.00","$260,690.00"
MIA - CMH,52529308503,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52529308503,https://www.airlines-manager.com/aircraft/show/88494374,1:45,7:44,320,"$372,394.00","$332,373.00"
MIA - CMH,52529308506,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52529308506,https://www.airlines-manager.com/aircraft/show/88494378,7:15,13:14,320,"$372,394.00","$332,373.00"
MIA - CMH,52556327642,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52556327642,https://www.airlines-manager.com/aircraft/show/91806233,14:00,19:59,320,"$372,394.00","$332,373.00"
MIA - CMH,52561334803,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52561334803,https://www.airlines-manager.com/aircraft/show/110582842,18:00,23:59,198,"$282,697.00","$254,428.00"
MIA - CMH,52570802758,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46163833,https://www.airlines-manager.com/network/showflight/52570802758,https://www.airlines-manager.com/aircraft/show/88239556,21:00,2:59,320,"$372,394.00","$332,373.00"
MIA - CMN,52529309046,MIA 84B-4 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52529309046,https://www.airlines-manager.com/aircraft/show/106676228,5:00,22:44,962,"$2,958,782.00","$2,700,113.00"
MIA - CMN,52566418212,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/43186717,https://www.airlines-manager.com/network/showflight/52566418212,https://www.airlines-manager.com/aircraft/show/106676225,20:30,14:14,961,"$2,956,487.00","$2,697,963.00"
MIA - COS,52529309086,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52529309086,https://www.airlines-manager.com/aircraft/show/103684631,6:30,14:59,320,"$543,529.00","$492,139.00"
MIA - COS,52543755578,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52543755578,https://www.airlines-manager.com/aircraft/show/103534665,10:00,18:44,112,"$256,291.00","$225,710.00"
MIA - COS,52556327648,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52556327648,https://www.airlines-manager.com/aircraft/show/103684630,14:00,22:29,320,"$543,529.00","$492,139.00"
MIA - COS,52561334757,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52561334757,https://www.airlines-manager.com/aircraft/show/103365574,17:30,1:59,320,"$543,529.00","$492,139.00"
MIA - COS,52570802936,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553098,https://www.airlines-manager.com/network/showflight/52570802936,https://www.airlines-manager.com/aircraft/show/103684632,22:45,7:14,320,"$543,529.00","$492,139.00"
MIA - CPT,52529309054,MIA 84A-6 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52529309054,https://www.airlines-manager.com/aircraft/show/93731916,5:00,10:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CPT,52561334848,MIA 84A-2 E,747-400,https://www.airlines-manager.com/network/showline/43025993,https://www.airlines-manager.com/network/showflight/52561334848,https://www.airlines-manager.com/aircraft/show/93686968,18:00,23:29,1124,"$5,606,566.00","$5,211,958.00"
MIA - CUN,52566418048,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52566418048,https://www.airlines-manager.com/aircraft/show/116789633,18:45,22:59,320,"$250,439.00","$215,086.00"
MIA - CUN,52570802835,MIA-PSP-BFF 5,737-900ER,https://www.airlines-manager.com/network/showline/49492790,https://www.airlines-manager.com/network/showflight/52570802835,https://www.airlines-manager.com/aircraft/show/116789630,21:45,1:59,320,"$250,439.00","$215,086.00"
MIA - CUR,52529309016,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52529309016,https://www.airlines-manager.com/aircraft/show/107121797,4:15,10:59,320,"$413,058.00","$371,045.00"
MIA - CUR,52543755689,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52543755689,https://www.airlines-manager.com/aircraft/show/107121796,11:00,17:44,320,"$413,058.00","$371,045.00"
MIA - CUR,52556327739,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52556327739,https://www.airlines-manager.com/aircraft/show/107121799,15:00,21:44,320,"$413,058.00","$371,045.00"
MIA - CUR,52566418194,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52566418194,https://www.airlines-manager.com/aircraft/show/107121795,20:15,2:59,320,"$413,058.00","$371,045.00"
MIA - CUR,52570802838,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704486,https://www.airlines-manager.com/network/showflight/52570802838,https://www.airlines-manager.com/aircraft/show/107121798,21:45,4:29,295,"$383,591.00","$342,583.00"
MIA - CVG,52529308576,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52529308576,https://www.airlines-manager.com/aircraft/show/103365574,2:00,7:44,320,"$367,026.00","$325,145.00"
MIA - CVG,52529308577,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52529308577,https://www.airlines-manager.com/aircraft/show/103684632,7:15,12:59,320,"$367,026.00","$325,145.00"
MIA - CVG,52543755599,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52543755599,https://www.airlines-manager.com/aircraft/show/107527976,10:00,15:44,0,"$96,737.00","$70,858.00"
MIA - CVG,52556327777,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52556327777,https://www.airlines-manager.com/aircraft/show/103684631,15:00,20:44,320,"$367,026.00","$325,145.00"
MIA - CVG,52566418045,MIA-COS-CVG 5,ERJ-175,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52566418045,https://www.airlines-manager.com/aircraft/show/103534665,18:45,0:29,112,"$173,151.00","$149,442.00"
MIA - CVG,52570802905,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553080,https://www.airlines-manager.com/network/showflight/52570802905,https://www.airlines-manager.com/aircraft/show/103684630,22:30,4:14,320,"$367,026.00","$325,145.00"
MIA - DEN,52529308372,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52529308372,https://www.airlines-manager.com/aircraft/show/91126651,1:30,9:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52529308374,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52529308374,https://www.airlines-manager.com/aircraft/show/91126652,3:30,11:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52543755678,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52543755678,https://www.airlines-manager.com/aircraft/show/91126649,11:00,19:29,400,"$727,271.00","$641,639.00"
MIA - DEN,52561334754,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52561334754,https://www.airlines-manager.com/aircraft/show/91126650,17:30,1:59,400,"$727,271.00","$641,639.00"
MIA - DEN,52570802892,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42257962,https://www.airlines-manager.com/network/showflight/52570802892,https://www.airlines-manager.com/aircraft/show/115181776,22:15,6:59,216,"$426,612.00","$370,220.00"
MIA - DFW,52529308852,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52529308852,https://www.airlines-manager.com/aircraft/show/91600936,3:30,9:59,310,"$408,444.00","$352,523.00"
MIA - DFW,52543755546,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52543755546,https://www.airlines-manager.com/aircraft/show/91600935,10:00,16:29,310,"$408,444.00","$352,523.00"
MIA - DFW,52543755547,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52543755547,https://www.airlines-manager.com/aircraft/show/91600938,11:00,17:29,310,"$408,444.00","$352,523.00"
MIA - DFW,52556327822,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52556327822,https://www.airlines-manager.com/aircraft/show/82543123,15:45,22:14,112,"$192,330.00","$156,823.00"
MIA - DFW,52570802829,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52570802829,https://www.airlines-manager.com/aircraft/show/91600939,21:30,3:59,310,"$408,444.00","$352,523.00"
MIA - DFW,52570802832,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42379416,https://www.airlines-manager.com/network/showflight/52570802832,https://www.airlines-manager.com/aircraft/show/91600937,22:30,4:59,310,"$408,444.00","$352,523.00"
MIA - DSM,52529308766,MIA-DSM-ALB 2,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52529308766,https://www.airlines-manager.com/aircraft/show/113101230,3:00,10:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52543755489,MIA-DSM-ALB 5,ERJ-175,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52543755489,https://www.airlines-manager.com/aircraft/show/100049776,8:45,15:59,112,"$215,983.00","$190,599.00"
MIA - DSM,52551230588,MIA-DSM-ALB 1,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52551230588,https://www.airlines-manager.com/aircraft/show/111064081,13:00,20:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52556327850,MIA-DSM-ALB 4,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52556327850,https://www.airlines-manager.com/aircraft/show/113101228,16:00,23:14,320,"$455,829.00","$412,800.00"
MIA - DSM,52566418189,MIA-DSM-ALB 3,737-900ER,https://www.airlines-manager.com/network/showline/48487669,https://www.airlines-manager.com/network/showflight/52566418189,https://www.airlines-manager.com/aircraft/show/113101233,20:15,3:29,320,"$455,829.00","$412,800.00"
MIA - DSS,52529307884,MIA 84B-7 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52529307884,https://www.airlines-manager.com/aircraft/show/106676231,0:00,16:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DSS,52551230520,MIA 84B-3 E2,777-300,https://www.airlines-manager.com/network/showline/43220462,https://www.airlines-manager.com/network/showflight/52551230520,https://www.airlines-manager.com/aircraft/show/106676227,12:00,4:59,962,"$2,848,980.00","$2,602,968.00"
MIA - DTW,52529308340,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52529308340,https://www.airlines-manager.com/aircraft/show/89943713,1:30,7:59,320,"$411,141.00","$358,819.00"
MIA - DTW,52529308341,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52529308341,https://www.airlines-manager.com/aircraft/show/89943712,2:30,8:59,320,"$411,141.00","$358,819.00"
MIA - DTW,52543755613,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52543755613,https://www.airlines-manager.com/aircraft/show/89943714,10:00,16:29,320,"$411,141.00","$358,819.00"
MIA - DTW,52556327692,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52556327692,https://www.airlines-manager.com/aircraft/show/89943711,14:00,20:29,320,"$411,141.00","$358,819.00"
MIA - DTW,52570802846,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52570802846,https://www.airlines-manager.com/aircraft/show/107577220,21:45,4:14,0,"$108,799.00","$76,677.00"
MIA - DTW,52570802847,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313712,https://www.airlines-manager.com/network/showflight/52570802847,https://www.airlines-manager.com/aircraft/show/89943715,22:30,4:59,320,"$411,141.00","$358,819.00"
MIA - ELP,52543755421,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52543755421,https://www.airlines-manager.com/aircraft/show/105093924,8:15,16:44,198,"$401,113.00","$365,102.00"
MIA - ELP,52543755422,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52543755422,https://www.airlines-manager.com/aircraft/show/91806234,10:00,18:29,320,"$531,738.00","$481,629.00"
MIA - ELP,52561334648,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52561334648,https://www.airlines-manager.com/aircraft/show/91806232,16:15,0:44,320,"$531,738.00","$481,629.00"
MIA - ELP,52561334649,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52561334649,https://www.airlines-manager.com/aircraft/show/91806231,17:00,1:29,320,"$531,738.00","$481,629.00"
MIA - ELP,52573805902,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040732,https://www.airlines-manager.com/network/showflight/52573805902,https://www.airlines-manager.com/aircraft/show/91806235,23:15,7:44,319,"$528,715.00","$478,672.00"
MIA - FAR,52529308136,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52529308136,https://www.airlines-manager.com/aircraft/show/110883161,0:45,9:29,320,"$546,042.00","$497,220.00"
MIA - FAR,52529308137,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52529308137,https://www.airlines-manager.com/aircraft/show/110883162,7:15,15:59,320,"$546,042.00","$497,220.00"
MIA - FAR,52543755669,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52543755669,https://www.airlines-manager.com/aircraft/show/110883159,11:00,19:44,320,"$546,042.00","$497,220.00"
MIA - FAR,52556327840,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52556327840,https://www.airlines-manager.com/aircraft/show/110883160,16:00,0:44,320,"$546,042.00","$497,220.00"
MIA - FAR,52561334863,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780421,https://www.airlines-manager.com/network/showflight/52561334863,https://www.airlines-manager.com/aircraft/show/87169421,18:15,2:59,112,"$257,517.00","$228,103.00"
MIA - FAT,52543755454,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52543755454,https://www.airlines-manager.com/aircraft/show/113101232,8:30,19:59,320,"$722,171.00","$661,957.00"
MIA - FAT,52543755455,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52543755455,https://www.airlines-manager.com/aircraft/show/113101229,11:00,22:29,320,"$722,171.00","$661,957.00"
MIA - FAT,52566418072,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52566418072,https://www.airlines-manager.com/aircraft/show/113101231,19:00,6:29,320,"$722,171.00","$661,957.00"
MIA - FAT,52570802885,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487645,https://www.airlines-manager.com/network/showflight/52570802885,https://www.airlines-manager.com/aircraft/show/113101234,22:15,9:44,320,"$722,171.00","$661,957.00"
MIA - FPO,52529307992,MIA-BGI-CUR 2,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52529307992,https://www.airlines-manager.com/aircraft/show/107121796,0:15,2:44,320,"$83,950.00","$59,309.00"
MIA - FPO,52529307993,MIA-BGI-CUR 5,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52529307993,https://www.airlines-manager.com/aircraft/show/107121799,4:15,6:44,320,"$83,950.00","$59,309.00"
MIA - FPO,52543755532,MIA-BGI-CUR 1,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52543755532,https://www.airlines-manager.com/aircraft/show/107121795,9:30,11:59,320,"$83,950.00","$59,309.00"
MIA - FPO,52543755533,MIA-BGI-CUR 4,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52543755533,https://www.airlines-manager.com/aircraft/show/107121798,11:00,13:29,320,"$83,950.00","$59,309.00"
MIA - FPO,52561334764,MIA-BGI-CUR 3,737-900ER,https://www.airlines-manager.com/network/showline/46704495,https://www.airlines-manager.com/network/showflight/52561334764,https://www.airlines-manager.com/aircraft/show/107121797,17:30,19:59,199,"$60,068.00","$35,839.00"
MIA - FSD,52529308210,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52529308210,https://www.airlines-manager.com/aircraft/show/110883110,1:00,8:59,310,"$501,462.00","$460,129.00"
MIA - FSD,52529308211,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52529308211,https://www.airlines-manager.com/aircraft/show/110883113,2:45,10:44,310,"$501,462.00","$460,129.00"
MIA - FSD,52556327685,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52556327685,https://www.airlines-manager.com/aircraft/show/110883112,14:00,21:59,310,"$501,462.00","$460,129.00"
MIA - FSD,52561334651,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52561334651,https://www.airlines-manager.com/aircraft/show/110883111,16:15,0:14,310,"$501,462.00","$460,129.00"
MIA - FSD,52570802859,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780568,https://www.airlines-manager.com/network/showflight/52570802859,https://www.airlines-manager.com/aircraft/show/104353572,22:00,5:59,93,"$218,447.00","$192,222.00"
MIA - GRR,52566418071,MIA-RAP-GRR 1,737-900ER,https://www.airlines-manager.com/network/showline/49492952,https://www.airlines-manager.com/network/showflight/52566418071,https://www.airlines-manager.com/aircraft/show/116789625,19:00,1:44,320,"$423,040.00","$381,149.00"
MIA - HAV,52529309045,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52529309045,https://www.airlines-manager.com/aircraft/show/89943715,5:00,7:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52543755502,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52543755502,https://www.airlines-manager.com/aircraft/show/89943712,9:00,11:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52543755503,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52543755503,https://www.airlines-manager.com/aircraft/show/89943713,10:00,12:59,320,"$131,386.00","$101,579.00"
MIA - HAV,52561334660,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52561334660,https://www.airlines-manager.com/aircraft/show/89943714,16:30,19:29,320,"$131,386.00","$101,579.00"
MIA - HAV,52566418203,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44313701,https://www.airlines-manager.com/network/showflight/52566418203,https://www.airlines-manager.com/aircraft/show/89943711,20:30,23:29,288,"$119,798.00","$90,244.00"
MIA - IAD,52529308925,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52529308925,https://www.airlines-manager.com/aircraft/show/97556720,4:15,9:59,310,"$360,578.00","$321,277.00"
MIA - IAD,52529308926,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52529308926,https://www.airlines-manager.com/aircraft/show/97556716,7:15,12:59,310,"$360,578.00","$321,277.00"
MIA - IAD,52543755612,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52543755612,https://www.airlines-manager.com/aircraft/show/97556721,10:00,15:44,310,"$360,578.00","$321,277.00"
MIA - IAD,52551230645,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52551230645,https://www.airlines-manager.com/aircraft/show/97556718,13:00,18:44,310,"$360,578.00","$321,277.00"
MIA - IAD,52566418037,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52566418037,https://www.airlines-manager.com/aircraft/show/97556719,18:45,0:29,310,"$360,578.00","$321,277.00"
MIA - IAD,52570802816,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/44372817,https://www.airlines-manager.com/network/showflight/52570802816,https://www.airlines-manager.com/aircraft/show/107527976,21:30,3:14,0,"$96,311.00","$69,012.00"
MIA - ICT,52529308696,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52529308696,https://www.airlines-manager.com/aircraft/show/110883159,2:30,9:29,320,"$446,842.00","$403,525.00"
MIA - ICT,52543755495,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52543755495,https://www.airlines-manager.com/aircraft/show/110883160,9:00,15:59,320,"$446,842.00","$403,525.00"
MIA - ICT,52543755496,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52543755496,https://www.airlines-manager.com/aircraft/show/87169421,11:00,18:14,112,"$212,463.00","$187,032.00"
MIA - ICT,52561334771,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52561334771,https://www.airlines-manager.com/aircraft/show/110883161,17:45,0:44,320,"$446,842.00","$403,525.00"
MIA - ICT,52570802920,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780462,https://www.airlines-manager.com/network/showflight/52570802920,https://www.airlines-manager.com/aircraft/show/110883162,22:45,5:44,320,"$446,842.00","$403,525.00"
MIA - IND,52529308691,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52529308691,https://www.airlines-manager.com/aircraft/show/82323689,2:30,8:29,112,"$180,871.00","$157,183.00"
MIA - IND,52529308694,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52529308694,https://www.airlines-manager.com/aircraft/show/99920623,3:15,9:14,320,"$382,615.00","$341,196.00"
MIA - IND,52543755573,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52543755573,https://www.airlines-manager.com/aircraft/show/99920624,10:00,15:59,320,"$382,615.00","$341,196.00"
MIA - IND,52556327825,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52556327825,https://www.airlines-manager.com/aircraft/show/99920625,16:00,21:59,320,"$382,615.00","$341,196.00"
MIA - IND,52570802897,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971944,https://www.airlines-manager.com/network/showflight/52570802897,https://www.airlines-manager.com/aircraft/show/99920626,22:30,4:29,320,"$382,615.00","$341,196.00"
MIA - JAN,52529309064,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52529309064,https://www.airlines-manager.com/aircraft/show/114912307,5:30,10:29,112,"$149,467.00","$130,572.00"
MIA - JAN,52543755445,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52543755445,https://www.airlines-manager.com/aircraft/show/115493373,8:30,13:29,310,"$314,208.00","$284,876.00"
MIA - JAN,52556327640,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52556327640,https://www.airlines-manager.com/aircraft/show/115493370,14:00,18:59,310,"$314,208.00","$284,876.00"
MIA - JAN,52566418186,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52566418186,https://www.airlines-manager.com/aircraft/show/115493371,20:15,1:14,310,"$314,208.00","$284,876.00"
MIA - JAN,52570802906,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235024,https://www.airlines-manager.com/network/showflight/52570802906,https://www.airlines-manager.com/aircraft/show/115493372,22:30,3:29,252,"$279,694.00","$251,542.00"
MIA - JAX,52529308758,MIA-COS-CVG 2,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52529308758,https://www.airlines-manager.com/aircraft/show/103684631,3:00,6:29,320,"$173,657.00","$144,618.00"
MIA - JAX,52543755639,MIA-COS-CVG 1,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52543755639,https://www.airlines-manager.com/aircraft/show/103684630,10:30,13:59,320,"$173,657.00","$144,618.00"
MIA - JAX,52556327609,MIA-COS-CVG 4,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52556327609,https://www.airlines-manager.com/aircraft/show/103365574,14:00,17:29,320,"$173,657.00","$144,618.00"
MIA - JAX,52566418102,MIA-COS-CVG 3,737-900ER,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52566418102,https://www.airlines-manager.com/aircraft/show/103684632,19:15,22:44,320,"$173,657.00","$144,618.00"
MIA - JAX,52570802895,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/45553086,https://www.airlines-manager.com/network/showflight/52570802895,https://www.airlines-manager.com/aircraft/show/106339154,22:15,1:44,198,"$131,853.00","$111,957.00"
MIA - JFK,52529309073,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52529309073,https://www.airlines-manager.com/aircraft/show/105308264,5:45,11:59,338,"$428,844.00","$376,368.00"
MIA - JFK,52529309074,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52529309074,https://www.airlines-manager.com/aircraft/show/82683137,6:45,12:59,112,"$187,016.00","$152,806.00"
MIA - JFK,52543755569,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52543755569,https://www.airlines-manager.com/aircraft/show/105308267,10:00,16:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52551230486,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52551230486,https://www.airlines-manager.com/aircraft/show/105308265,12:00,18:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52561334800,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52561334800,https://www.airlines-manager.com/aircraft/show/105308266,18:00,0:14,338,"$428,844.00","$376,368.00"
MIA - JFK,52566418224,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42216500,https://www.airlines-manager.com/network/showflight/52566418224,https://www.airlines-manager.com/aircraft/show/105308268,20:45,2:59,337,"$428,082.00","$375,631.00"
MIA - JNB,52529307879,MIA 84A-4 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52529307879,https://www.airlines-manager.com/aircraft/show/93686966,0:00,6:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - JNB,52551230655,MIA 84A-7 E,747-400,https://www.airlines-manager.com/network/showline/42990947,https://www.airlines-manager.com/network/showflight/52551230655,https://www.airlines-manager.com/aircraft/show/93776641,13:00,19:44,1124,"$6,002,140.00","$5,568,508.00"
MIA - LAS,52529308355,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52529308355,https://www.airlines-manager.com/aircraft/show/105093929,1:30,11:59,338,"$716,690.00","$649,514.00"
MIA - LAS,52543755602,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52543755602,https://www.airlines-manager.com/aircraft/show/105093925,10:00,20:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52551230512,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52551230512,https://www.airlines-manager.com/aircraft/show/113251304,12:00,22:29,198,"$496,976.00","$440,972.00"
MIA - LAS,52551230513,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52551230513,https://www.airlines-manager.com/aircraft/show/105093926,13:00,23:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52556327785,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52556327785,https://www.airlines-manager.com/aircraft/show/105093927,15:00,1:29,338,"$716,690.00","$649,514.00"
MIA - LAS,52570802916,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449486,https://www.airlines-manager.com/network/showflight/52570802916,https://www.airlines-manager.com/aircraft/show/105093928,22:30,8:59,338,"$716,690.00","$649,514.00"
MIA - LAX,52529307880,MIA-LAX-DEN 1,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52529307880,https://www.airlines-manager.com/aircraft/show/91126649,0:00,10:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52529307881,MIA-LAX-DEN 2,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52529307881,https://www.airlines-manager.com/aircraft/show/91126650,2:00,12:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52543755620,MIA-LAX-DEN 3,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52543755620,https://www.airlines-manager.com/aircraft/show/91126651,10:00,20:59,400,"$917,440.00","$823,968.00"
MIA - LAX,52543755621,MIA-LAX-DEN 5 E,A319-100,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52543755621,https://www.airlines-manager.com/aircraft/show/115181776,11:00,22:14,216,"$537,195.00","$475,832.00"
MIA - LAX,52561334669,MIA-LAX-DEN 4,757-300,https://www.airlines-manager.com/network/showline/42216509,https://www.airlines-manager.com/network/showflight/52561334669,https://www.airlines-manager.com/aircraft/show/91126652,16:30,3:29,399,"$915,406.00","$822,010.00"
MIA - LEX,52529308753,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52529308753,https://www.airlines-manager.com/aircraft/show/116789653,3:00,8:29,310,"$348,540.00","$317,855.00"
MIA - LEX,52543755593,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52543755593,https://www.airlines-manager.com/aircraft/show/116789650,10:00,15:29,310,"$348,540.00","$317,855.00"
MIA - LEX,52556327761,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52556327761,https://www.airlines-manager.com/aircraft/show/116789651,15:00,20:29,310,"$348,540.00","$317,855.00"
MIA - LEX,52566418152,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493185,https://www.airlines-manager.com/network/showflight/52566418152,https://www.airlines-manager.com/aircraft/show/116789652,19:45,1:14,299,"$341,294.00","$310,875.00"
MIA - LIT,52529308596,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52529308596,https://www.airlines-manager.com/aircraft/show/96692674,2:15,7:59,310,"$360,455.00","$328,068.00"
MIA - LIT,52529308598,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52529308598,https://www.airlines-manager.com/aircraft/show/105601657,4:15,9:59,112,"$171,002.00","$149,927.00"
MIA - LIT,52543755437,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52543755437,https://www.airlines-manager.com/aircraft/show/94886625,8:15,13:59,310,"$360,455.00","$328,068.00"
MIA - LIT,52556327727,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52556327727,https://www.airlines-manager.com/aircraft/show/94886629,15:00,20:44,310,"$360,455.00","$328,068.00"
MIA - LIT,52570802813,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376132,https://www.airlines-manager.com/network/showflight/52570802813,https://www.airlines-manager.com/aircraft/show/94886626,21:30,3:14,303,"$355,661.00","$323,455.00"
MIA - LOS,52529309088,MIA 84A-5 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52529309088,https://www.airlines-manager.com/aircraft/show/93704215,6:45,4:59,1124,"$4,253,423.00","$3,953,976.00"
MIA - LOS,52566418143,MIA 84A-1 E,747-400,https://www.airlines-manager.com/network/showline/42959909,https://www.airlines-manager.com/network/showflight/52566418143,https://www.airlines-manager.com/aircraft/show/93686969,19:45,17:59,1114,"$4,190,735.00","$3,893,862.00"
MIA - MBJ,52529308148,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52529308148,https://www.airlines-manager.com/aircraft/show/104034460,0:45,4:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,52529308149,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52529308149,https://www.airlines-manager.com/aircraft/show/104034461,5:00,9:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52543755507,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52543755507,https://www.airlines-manager.com/aircraft/show/107577220,9:00,13:14,0,"$65,741.00","$47,653.00"
MIA - MBJ,52543755508,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52543755508,https://www.airlines-manager.com/aircraft/show/104034459,10:00,14:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52551230573,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52551230573,https://www.airlines-manager.com/aircraft/show/104034457,12:45,16:59,228,"$191,701.00","$170,375.00"
MIA - MBJ,52561334724,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52561334724,https://www.airlines-manager.com/aircraft/show/104034458,17:00,21:14,228,"$191,701.00","$170,375.00"
MIA - MBJ,52570802953,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193777,https://www.airlines-manager.com/network/showflight/52570802953,https://www.airlines-manager.com/aircraft/show/99326789,23:00,3:14,228,"$191,701.00","$170,375.00"
MIA - MCI,52529308160,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52529308160,https://www.airlines-manager.com/aircraft/show/91806232,0:45,7:44,320,"$446,723.00","$401,140.00"
MIA - MCI,52529308161,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52529308161,https://www.airlines-manager.com/aircraft/show/91806231,1:30,8:29,320,"$446,723.00","$401,140.00"
MIA - MCI,52543755600,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52543755600,https://www.airlines-manager.com/aircraft/show/91806235,10:00,16:59,320,"$446,723.00","$401,140.00"
MIA - MCI,52566418033,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52566418033,https://www.airlines-manager.com/aircraft/show/91806234,18:30,1:29,320,"$446,723.00","$401,140.00"
MIA - MCI,52566418034,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040757,https://www.airlines-manager.com/network/showflight/52566418034,https://www.airlines-manager.com/aircraft/show/105093924,19:00,1:59,197,"$336,286.00","$303,944.00"
MIA - MCO,52529307994,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52529307994,https://www.airlines-manager.com/aircraft/show/107763565,0:15,2:59,320,"$121,986.00","$84,764.00"
MIA - MCO,52529307995,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52529307995,https://www.airlines-manager.com/aircraft/show/107467213,4:00,6:44,112,"$54,839.00","$35,667.00"
MIA - MCO,52529307996,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52529307996,https://www.airlines-manager.com/aircraft/show/103534663,6:00,8:44,112,"$54,839.00","$35,667.00"
MIA - MCO,52543755520,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52543755520,https://www.airlines-manager.com/aircraft/show/103534663,9:15,11:59,112,"$54,839.00","$35,667.00"
MIA - MCO,52543755521,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52543755521,https://www.airlines-manager.com/aircraft/show/107763566,10:00,12:44,320,"$121,986.00","$84,764.00"
MIA - MCO,52543755522,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52543755522,https://www.airlines-manager.com/aircraft/show/107763561,11:00,13:44,320,"$121,986.00","$84,764.00"
MIA - MCO,52561334781,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909528,https://www.airlines-manager.com/network/showflight/52561334781,https://www.airlines-manager.com/aircraft/show/107763562,17:45,20:29,320,"$121,986.00","$84,764.00"
MIA - MEM,52529307875,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52529307875,https://www.airlines-manager.com/aircraft/show/110582842,0:00,5:29,198,"$262,106.00","$234,337.00"
MIA - MEM,52529307876,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52529307876,https://www.airlines-manager.com/aircraft/show/88239556,3:00,8:29,320,"$345,153.00","$305,564.00"
MIA - MEM,52543755392,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52543755392,https://www.airlines-manager.com/aircraft/show/88494374,7:45,13:14,320,"$345,153.00","$305,564.00"
MIA - MEM,52556327643,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52556327643,https://www.airlines-manager.com/aircraft/show/88494378,14:00,19:29,320,"$345,153.00","$305,564.00"
MIA - MEM,52566418180,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160502,https://www.airlines-manager.com/network/showflight/52566418180,https://www.airlines-manager.com/aircraft/show/91806233,20:00,1:29,320,"$345,153.00","$305,564.00"
MIA - MHT,52529308324,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52529308324,https://www.airlines-manager.com/aircraft/show/115493371,1:15,8:14,310,"$452,254.00","$413,999.00"
MIA - MHT,52529308325,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52529308325,https://www.airlines-manager.com/aircraft/show/115493372,3:30,10:29,310,"$452,254.00","$413,999.00"
MIA - MHT,52543755683,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52543755683,https://www.airlines-manager.com/aircraft/show/114912307,11:00,17:59,112,"$213,591.00","$188,394.00"
MIA - MHT,52556327619,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52556327619,https://www.airlines-manager.com/aircraft/show/115493373,14:00,20:59,310,"$452,254.00","$413,999.00"
MIA - MHT,52566418081,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235005,https://www.airlines-manager.com/network/showflight/52566418081,https://www.airlines-manager.com/aircraft/show/115493370,19:00,1:59,309,"$450,922.00","$412,711.00"
MIA - MKE,52529307885,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52529307885,https://www.airlines-manager.com/aircraft/show/88494378,0:15,7:14,320,"$446,367.00","$402,240.00"
MIA - MKE,52529307886,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52529307886,https://www.airlines-manager.com/aircraft/show/91806233,6:15,13:14,320,"$446,367.00","$402,240.00"
MIA - MKE,52543755668,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52543755668,https://www.airlines-manager.com/aircraft/show/110582842,11:00,17:59,198,"$337,526.00","$306,091.00"
MIA - MKE,52556327639,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52556327639,https://www.airlines-manager.com/aircraft/show/88239556,14:00,20:59,320,"$446,367.00","$402,240.00"
MIA - MKE,52566418057,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46201956,https://www.airlines-manager.com/network/showflight/52566418057,https://www.airlines-manager.com/aircraft/show/88494374,18:45,1:44,320,"$446,367.00","$402,240.00"
MIA - MSN,52561334686,MIA-RAP-GRR 2,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52561334686,https://www.airlines-manager.com/aircraft/show/116789624,16:45,23:59,320,"$449,804.00","$407,231.00"
MIA - MSN,52566418044,MIA-RAP-GRR 4,737-900ER,https://www.airlines-manager.com/network/showline/49492954,https://www.airlines-manager.com/network/showflight/52566418044,https://www.airlines-manager.com/aircraft/show/116789622,18:45,1:59,320,"$449,804.00","$407,231.00"
MIA - MSO,52543755386,MIA-FAT-MSO 2,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52543755386,https://www.airlines-manager.com/aircraft/show/113101231,7:45,18:59,320,"$697,028.00","$638,049.00"
MIA - MSO,52543755387,MIA-FAT-MSO 3,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52543755387,https://www.airlines-manager.com/aircraft/show/113101234,11:00,22:14,320,"$697,028.00","$638,049.00"
MIA - MSO,52566418156,MIA-FAT-MSO 4,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52566418156,https://www.airlines-manager.com/aircraft/show/113101232,20:00,7:14,320,"$697,028.00","$638,049.00"
MIA - MSO,52570802910,MIA-FAT-MSO 1,737-900ER,https://www.airlines-manager.com/network/showline/48487660,https://www.airlines-manager.com/network/showflight/52570802910,https://www.airlines-manager.com/aircraft/show/113101229,22:30,9:44,320,"$697,028.00","$638,049.00"
MIA - MSP,52529308539,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52529308539,https://www.airlines-manager.com/aircraft/show/105308267,2:00,9:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52529308541,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52529308541,https://www.airlines-manager.com/aircraft/show/105308268,3:00,10:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52543755570,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52543755570,https://www.airlines-manager.com/aircraft/show/105308266,10:00,17:59,338,"$541,640.00","$492,958.00"
MIA - MSP,52551230608,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52551230608,https://www.airlines-manager.com/aircraft/show/82683137,13:00,20:59,112,"$235,968.00","$203,010.00"
MIA - MSP,52561334854,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52561334854,https://www.airlines-manager.com/aircraft/show/105308265,18:15,2:14,338,"$541,640.00","$492,958.00"
MIA - MSP,52570802845,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288078,https://www.airlines-manager.com/network/showflight/52570802845,https://www.airlines-manager.com/aircraft/show/105308264,21:45,5:44,338,"$541,640.00","$492,958.00"
MIA - MSY,52529308369,MIA-MKE-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52529308369,https://www.airlines-manager.com/aircraft/show/91806233,1:30,6:14,320,"$299,983.00","$264,860.00"
MIA - MSY,52529308370,MIA-MKE-CMH 5 B,A319-100,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52529308370,https://www.airlines-manager.com/aircraft/show/110582842,5:30,10:14,198,"$228,690.00","$204,197.00"
MIA - MSY,52543755466,MIA-MKE-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52543755466,https://www.airlines-manager.com/aircraft/show/88239556,8:30,13:14,320,"$299,983.00","$264,860.00"
MIA - MSY,52556327635,MIA-MKE-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52556327635,https://www.airlines-manager.com/aircraft/show/88494374,14:00,18:44,320,"$299,983.00","$264,860.00"
MIA - MSY,52566418122,MIA-MKE-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/46160486,https://www.airlines-manager.com/network/showflight/52566418122,https://www.airlines-manager.com/aircraft/show/88494378,19:30,0:14,320,"$299,983.00","$264,860.00"
MIA - NAS,52529308611,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52529308611,https://www.airlines-manager.com/aircraft/show/104034461,2:15,4:59,228,"$78,566.00","$60,595.00"
MIA - NAS,52543755375,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52543755375,https://www.airlines-manager.com/aircraft/show/99326789,7:30,10:14,228,"$78,566.00","$60,595.00"
MIA - NAS,52543755376,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52543755376,https://www.airlines-manager.com/aircraft/show/104034457,10:00,12:44,228,"$78,566.00","$60,595.00"
MIA - NAS,52551230662,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52551230662,https://www.airlines-manager.com/aircraft/show/107577220,13:15,15:59,0,"$33,882.00","$19,673.00"
MIA - NAS,52556327708,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52556327708,https://www.airlines-manager.com/aircraft/show/104034458,14:15,16:59,228,"$78,566.00","$60,595.00"
MIA - NAS,52566418023,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52566418023,https://www.airlines-manager.com/aircraft/show/104034459,18:30,21:14,228,"$78,566.00","$60,595.00"
MIA - NAS,52570802874,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193695,https://www.airlines-manager.com/network/showflight/52570802874,https://www.airlines-manager.com/aircraft/show/104034460,22:00,0:44,228,"$78,566.00","$60,595.00"
MIA - OAK,52529308185,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52529308185,https://www.airlines-manager.com/aircraft/show/91198617,1:00,12:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52543755644,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52543755644,https://www.airlines-manager.com/aircraft/show/91198615,11:00,22:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52551230614,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52551230614,https://www.airlines-manager.com/aircraft/show/91198619,13:00,0:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52556327791,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52556327791,https://www.airlines-manager.com/aircraft/show/91198616,15:00,2:59,320,"$737,441.00","$671,549.00"
MIA - OAK,52570802941,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079209,https://www.airlines-manager.com/network/showflight/52570802941,https://www.airlines-manager.com/aircraft/show/91198618,23:00,10:59,319,"$735,277.00","$669,472.00"
MIA - OKC,52529308474,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52529308474,https://www.airlines-manager.com/aircraft/show/110883112,1:45,8:29,310,"$430,356.00","$392,725.00"
MIA - OKC,52529308476,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52529308476,https://www.airlines-manager.com/aircraft/show/110883111,4:00,10:44,310,"$430,356.00","$392,725.00"
MIA - OKC,52543755551,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52543755551,https://www.airlines-manager.com/aircraft/show/104353572,10:00,16:44,112,"$202,379.00","$177,668.00"
MIA - OKC,52551230577,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52551230577,https://www.airlines-manager.com/aircraft/show/110883110,13:00,19:44,310,"$430,356.00","$392,725.00"
MIA - OKC,52556327726,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780556,https://www.airlines-manager.com/network/showflight/52556327726,https://www.airlines-manager.com/aircraft/show/110883113,14:45,21:29,310,"$430,356.00","$392,725.00"
MIA - OMA,52529308687,MIA-BOI-BNA 1,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52529308687,https://www.airlines-manager.com/aircraft/show/104133006,2:30,9:59,320,"$477,532.00","$432,454.00"
MIA - OMA,52529308689,MIA-BOI-BNA 4,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52529308689,https://www.airlines-manager.com/aircraft/show/103775657,6:30,13:59,320,"$477,532.00","$432,454.00"
MIA - OMA,52543755583,MIA-BOI-BNA 3,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52543755583,https://www.airlines-manager.com/aircraft/show/104020880,10:00,17:29,320,"$477,532.00","$432,454.00"
MIA - OMA,52556327793,MIA-BOI-BNA 2,737-900ER,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52556327793,https://www.airlines-manager.com/aircraft/show/104022609,15:15,22:44,320,"$477,532.00","$432,454.00"
MIA - OMA,52561334738,MIA-BOI-BNA 5,ERJ-175,https://www.airlines-manager.com/network/showline/45701875,https://www.airlines-manager.com/network/showflight/52561334738,https://www.airlines-manager.com/aircraft/show/103534663,17:15,0:44,111,"$224,078.00","$197,554.00"
MIA - ONT,52529308046,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52529308046,https://www.airlines-manager.com/aircraft/show/90489722,0:30,11:29,320,"$691,076.00","$629,468.00"
MIA - ONT,52529308047,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52529308047,https://www.airlines-manager.com/aircraft/show/86238756,2:30,13:29,320,"$691,076.00","$629,468.00"
MIA - ONT,52543755652,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52543755652,https://www.airlines-manager.com/aircraft/show/90489723,11:00,21:59,320,"$691,076.00","$629,468.00"
MIA - ONT,52556327644,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52556327644,https://www.airlines-manager.com/aircraft/show/105223010,14:00,0:59,198,"$518,936.00","$474,196.00"
MIA - ONT,52570802907,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280191,https://www.airlines-manager.com/network/showflight/52570802907,https://www.airlines-manager.com/aircraft/show/86238755,22:30,9:29,320,"$691,076.00","$629,468.00"
MIA - ORD,52529308848,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52529308848,https://www.airlines-manager.com/aircraft/show/91600935,3:15,9:59,310,"$423,843.00","$364,038.00"
MIA - ORD,52529308850,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52529308850,https://www.airlines-manager.com/aircraft/show/91600938,4:15,10:59,310,"$423,843.00","$364,038.00"
MIA - ORD,52543755509,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52543755509,https://www.airlines-manager.com/aircraft/show/82543123,9:00,15:44,112,"$199,128.00","$161,151.00"
MIA - ORD,52543755510,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52543755510,https://www.airlines-manager.com/aircraft/show/91600937,11:00,17:44,310,"$423,843.00","$364,038.00"
MIA - ORD,52556327719,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52556327719,https://www.airlines-manager.com/aircraft/show/91600939,14:45,21:29,310,"$423,843.00","$364,038.00"
MIA - ORD,52556327720,MIA-ORD-BOI-JAX B,A319-100,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52556327720,https://www.airlines-manager.com/aircraft/show/106339154,15:30,22:14,198,"$319,680.00","$271,784.00"
MIA - ORD,52566418220,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42216504,https://www.airlines-manager.com/network/showflight/52566418220,https://www.airlines-manager.com/aircraft/show/91600936,20:45,3:29,310,"$423,843.00","$364,038.00"
MIA - ORF,52529308002,MIA-MHT-CAK 5,ERJ-175,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52529308002,https://www.airlines-manager.com/aircraft/show/114912307,0:15,5:29,112,"$157,365.00","$137,392.00"
MIA - ORF,52529308003,MIA-MHT-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52529308003,https://www.airlines-manager.com/aircraft/show/115493373,3:15,8:29,310,"$331,170.00","$300,220.00"
MIA - ORF,52543755426,MIA-MHT-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52543755426,https://www.airlines-manager.com/aircraft/show/115493370,8:15,13:29,310,"$331,170.00","$300,220.00"
MIA - ORF,52556327772,MIA-MHT-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52556327772,https://www.airlines-manager.com/aircraft/show/115493371,15:00,20:14,310,"$331,170.00","$300,220.00"
MIA - ORF,52561334750,MIA-MHT-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/49235031,https://www.airlines-manager.com/network/showflight/52561334750,https://www.airlines-manager.com/aircraft/show/115493372,17:15,22:29,310,"$331,170.00","$300,220.00"
MIA - PDX,52543755594,MIA-PDX-DTW 1,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52543755594,https://www.airlines-manager.com/aircraft/show/89943715,10:00,22:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52551230647,MIA-PDX-DTW 3,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52551230647,https://www.airlines-manager.com/aircraft/show/89943713,13:00,1:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52556327689,MIA-PDX-DTW 4,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52556327689,https://www.airlines-manager.com/aircraft/show/89943712,14:00,2:29,320,"$771,072.00","$700,755.00"
MIA - PDX,52566418135,MIA-PDX-DTW 2,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52566418135,https://www.airlines-manager.com/aircraft/show/89943714,19:30,7:59,320,"$771,072.00","$700,755.00"
MIA - PDX,52573805925,MIA-PDX-DTW 5,737-900ER,https://www.airlines-manager.com/network/showline/44322115,https://www.airlines-manager.com/network/showflight/52573805925,https://www.airlines-manager.com/aircraft/show/89943711,23:30,11:59,319,"$766,727.00","$696,519.00"
MIA - PHL,52529308901,MIA-ORD-DFW 3,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52529308901,https://www.airlines-manager.com/aircraft/show/91600939,4:00,9:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52529308902,MIA-ORD-DFW 5,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52529308902,https://www.airlines-manager.com/aircraft/show/91600937,5:00,10:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52543755548,MIA-ORD-DFW 2,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52543755548,https://www.airlines-manager.com/aircraft/show/91600936,10:00,15:59,310,"$379,715.00","$337,940.00"
MIA - PHL,52561334678,MIA-ORD-DFW 1,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52561334678,https://www.airlines-manager.com/aircraft/show/91600935,16:30,22:29,310,"$379,715.00","$337,940.00"
MIA - PHL,52561334679,MIA-ORD-DFW 4,A321-200,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52561334679,https://www.airlines-manager.com/aircraft/show/91600938,17:30,23:29,310,"$379,715.00","$337,940.00"
MIA - PHL,52570802883,MIA-ORD-DFW 6,ERJ-175,https://www.airlines-manager.com/network/showline/42384835,https://www.airlines-manager.com/network/showflight/52570802883,https://www.airlines-manager.com/aircraft/show/82543123,22:15,4:14,112,"$179,482.00","$152,644.00"
MIA - PHX,52529308008,MIA-JFK-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52529308008,https://www.airlines-manager.com/aircraft/show/105308266,0:15,9:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52529308009,MIA-JFK-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52529308009,https://www.airlines-manager.com/aircraft/show/105308265,2:15,11:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52543755647,MIA-JFK-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52543755647,https://www.airlines-manager.com/aircraft/show/105308268,11:00,20:44,338,"$670,363.00","$611,658.00"
MIA - PHX,52551230487,MIA-JFK-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52551230487,https://www.airlines-manager.com/aircraft/show/105308264,12:00,21:44,338,"$670,363.00","$611,658.00"
MIA - PHX,52561334647,MIA-JFK-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52561334647,https://www.airlines-manager.com/aircraft/show/105308267,16:15,1:59,338,"$670,363.00","$611,658.00"
MIA - PHX,52570802765,MIA-JFK-PHX 6,ERJ-175,https://www.airlines-manager.com/network/showline/42288076,https://www.airlines-manager.com/network/showflight/52570802765,https://www.airlines-manager.com/aircraft/show/82683137,21:00,6:44,112,"$289,990.00","$249,853.00"
MIA - PIT,52529308828,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52529308828,https://www.airlines-manager.com/aircraft/show/99920624,3:15,9:14,320,"$381,250.00","$339,574.00"
MIA - PIT,52543755572,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52543755572,https://www.airlines-manager.com/aircraft/show/99920625,10:00,15:59,320,"$381,250.00","$339,574.00"
MIA - PIT,52561334663,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52561334663,https://www.airlines-manager.com/aircraft/show/99920626,16:30,22:29,320,"$381,250.00","$339,574.00"
MIA - PIT,52566418201,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52566418201,https://www.airlines-manager.com/aircraft/show/82323689,20:30,2:29,112,"$180,210.00","$156,414.00"
MIA - PIT,52570802806,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971957,https://www.airlines-manager.com/network/showflight/52570802806,https://www.airlines-manager.com/aircraft/show/99920623,21:15,3:14,320,"$381,250.00","$339,574.00"
MIA - PLS,52529308835,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52529308835,https://www.airlines-manager.com/aircraft/show/99326789,3:15,7:29,228,"$205,463.00","$184,370.00"
MIA - PLS,52529308837,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52529308837,https://www.airlines-manager.com/aircraft/show/104034460,5:00,9:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52543755586,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52543755586,https://www.airlines-manager.com/aircraft/show/104034458,10:00,14:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52556327707,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52556327707,https://www.airlines-manager.com/aircraft/show/104034459,14:15,18:29,228,"$205,463.00","$184,370.00"
MIA - PLS,52561334725,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52561334725,https://www.airlines-manager.com/aircraft/show/104034457,17:00,21:14,228,"$205,463.00","$184,370.00"
MIA - PLS,52570802873,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193793,https://www.airlines-manager.com/network/showflight/52570802873,https://www.airlines-manager.com/aircraft/show/104034461,22:00,2:14,228,"$205,463.00","$184,370.00"
MIA - POS,52551230565,MIA 84B-1 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52551230565,https://www.airlines-manager.com/aircraft/show/106676225,12:30,20:29,962,"$1,335,038.00","$1,217,931.00"
MIA - POS,52556327826,MIA 84B-6 E2,777-300,https://www.airlines-manager.com/network/showline/46538394,https://www.airlines-manager.com/network/showflight/52556327826,https://www.airlines-manager.com/aircraft/show/106676230,16:00,23:59,725,"$1,096,079.00","$991,991.00"
MIA - PSP,52556327603,MIA-PSP-BFF 1,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52556327603,https://www.airlines-manager.com/aircraft/show/116789634,14:00,0:44,320,"$659,137.00","$601,439.00"
MIA - PSP,52556327604,MIA-PSP-BFF 3,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52556327604,https://www.airlines-manager.com/aircraft/show/116789632,14:15,0:59,320,"$659,137.00","$601,439.00"
MIA - PSP,52570802944,MIA-PSP-BFF 2,737-900ER,https://www.airlines-manager.com/network/showline/49492822,https://www.airlines-manager.com/network/showflight/52570802944,https://www.airlines-manager.com/aircraft/show/116789633,23:00,9:44,320,"$659,137.00","$601,439.00"
MIA - PUJ,52529308878,MIA-PUJ-BDA 2 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52529308878,https://www.airlines-manager.com/aircraft/show/104034458,3:30,9:14,228,"$275,694.00","$249,074.00"
MIA - PUJ,52543755582,MIA-PUJ-BDA 5 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52543755582,https://www.airlines-manager.com/aircraft/show/104034461,10:00,15:44,228,"$275,694.00","$249,074.00"
MIA - PUJ,52556327829,MIA CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52556327829,https://www.airlines-manager.com/aircraft/show/107577220,16:00,21:44,0,"$94,581.00","$70,986.00"
MIA - PUJ,52561334655,MIA-PUJ-BDA 4 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52561334655,https://www.airlines-manager.com/aircraft/show/104034460,16:15,21:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52561334656,MIA-PUJ-BDA 6 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52561334656,https://www.airlines-manager.com/aircraft/show/99326789,17:15,22:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52570802802,MIA-PUJ-BDA 1 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52570802802,https://www.airlines-manager.com/aircraft/show/104034457,21:15,2:59,228,"$275,694.00","$249,074.00"
MIA - PUJ,52570802803,MIA-PUJ-BDA 3 S,A319-100,https://www.airlines-manager.com/network/showline/42193830,https://www.airlines-manager.com/network/showflight/52570802803,https://www.airlines-manager.com/aircraft/show/104034459,22:00,3:44,228,"$275,694.00","$249,074.00"
MIA - PVD,52529308327,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52529308327,https://www.airlines-manager.com/aircraft/show/108834805,1:15,7:59,310,"$425,838.00","$389,609.00"
MIA - PVD,52529308328,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52529308328,https://www.airlines-manager.com/aircraft/show/108834807,7:15,13:59,198,"$321,362.00","$292,327.00"
MIA - PVD,52543755664,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52543755664,https://www.airlines-manager.com/aircraft/show/108834804,11:00,17:44,310,"$425,838.00","$389,609.00"
MIA - PVD,52561334709,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52561334709,https://www.airlines-manager.com/aircraft/show/108834806,17:00,23:44,310,"$425,838.00","$389,609.00"
MIA - PVD,52570802890,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218382,https://www.airlines-manager.com/network/showflight/52570802890,https://www.airlines-manager.com/aircraft/show/108834803,22:15,4:59,310,"$425,838.00","$389,609.00"
MIA - PWM,52543755362,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52543755362,https://www.airlines-manager.com/aircraft/show/94886629,7:30,14:59,310,"$466,126.00","$428,202.00"
MIA - PWM,52556327650,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52556327650,https://www.airlines-manager.com/aircraft/show/94886626,14:00,21:29,310,"$466,126.00","$428,202.00"
MIA - PWM,52566418035,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52566418035,https://www.airlines-manager.com/aircraft/show/96692674,18:45,2:14,310,"$466,126.00","$428,202.00"
MIA - PWM,52566418036,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52566418036,https://www.airlines-manager.com/aircraft/show/105601657,20:45,4:14,112,"$220,081.00","$194,961.00"
MIA - PWM,52573805945,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46376143,https://www.airlines-manager.com/network/showflight/52573805945,https://www.airlines-manager.com/aircraft/show/94886625,23:45,7:14,310,"$466,126.00","$428,202.00"
MIA - RAP,52561334739,MIA-RAP-GRR 3,737-900ER,https://www.airlines-manager.com/network/showline/49492949,https://www.airlines-manager.com/network/showflight/52561334739,https://www.airlines-manager.com/aircraft/show/116789623,17:15,2:14,320,"$561,201.00","$511,257.00"
MIA - RDU,52529309027,MIA-AUS-PIT 1,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52529309027,https://www.airlines-manager.com/aircraft/show/99920626,4:30,9:14,320,"$309,405.00","$273,229.00"
MIA - RDU,52543755443,MIA-AUS-PIT 5,ERJ-175,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52543755443,https://www.airlines-manager.com/aircraft/show/82323689,8:30,13:14,112,"$147,360.00","$127,227.00"
MIA - RDU,52543755444,MIA-AUS-PIT 4,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52543755444,https://www.airlines-manager.com/aircraft/show/99920623,10:00,14:44,320,"$309,405.00","$273,229.00"
MIA - RDU,52556327824,MIA-AUS-PIT 3,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52556327824,https://www.airlines-manager.com/aircraft/show/99920624,16:00,20:44,320,"$309,405.00","$273,229.00"
MIA - RDU,52570802871,MIA-AUS-PIT 2,737-900ER,https://www.airlines-manager.com/network/showline/44971928,https://www.airlines-manager.com/network/showflight/52570802871,https://www.airlines-manager.com/aircraft/show/99920625,22:00,2:44,320,"$309,405.00","$273,229.00"
MIA - RIC,52543755451,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52543755451,https://www.airlines-manager.com/aircraft/show/110883112,8:30,13:44,310,"$335,618.00","$304,336.00"
MIA - RIC,52543755452,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52543755452,https://www.airlines-manager.com/aircraft/show/110883111,11:00,16:14,310,"$335,618.00","$304,336.00"
MIA - RIC,52561334680,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52561334680,https://www.airlines-manager.com/aircraft/show/104353572,16:45,21:59,112,"$159,523.00","$139,309.00"
MIA - RIC,52566418150,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52566418150,https://www.airlines-manager.com/aircraft/show/110883110,19:45,0:59,310,"$335,618.00","$304,336.00"
MIA - RIC,52570802820,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780585,https://www.airlines-manager.com/network/showflight/52570802820,https://www.airlines-manager.com/aircraft/show/110883113,21:30,2:44,309,"$334,622.00","$303,369.00"
MIA - RNO,52529308183,MIA-RNO-ONT 5 B,A319-100,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52529308183,https://www.airlines-manager.com/aircraft/show/105223010,1:00,12:44,198,"$543,694.00","$497,857.00"
MIA - RNO,52543755651,MIA-RNO-ONT 1,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52543755651,https://www.airlines-manager.com/aircraft/show/86238755,11:00,22:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52551230609,MIA-RNO-ONT 2,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52551230609,https://www.airlines-manager.com/aircraft/show/90489722,13:00,0:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52556327775,MIA-RNO-ONT 3,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52556327775,https://www.airlines-manager.com/aircraft/show/86238756,15:00,2:29,320,"$721,759.00","$658,908.00"
MIA - RNO,52570802851,MIA-RNO-ONT 4,737-900ER,https://www.airlines-manager.com/network/showline/46280187,https://www.airlines-manager.com/network/showflight/52570802851,https://www.airlines-manager.com/aircraft/show/90489723,22:00,9:29,320,"$721,759.00","$658,908.00"
MIA - RSW,52529308921,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52529308921,https://www.airlines-manager.com/aircraft/show/110114297,4:00,6:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52543755527,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52543755527,https://www.airlines-manager.com/aircraft/show/110114295,9:15,11:44,228,"$65,645.00","$47,392.00"
MIA - RSW,52543755528,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52543755528,https://www.airlines-manager.com/aircraft/show/110114296,10:15,12:44,228,"$65,645.00","$47,392.00"
MIA - RSW,52556327693,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52556327693,https://www.airlines-manager.com/aircraft/show/110114300,14:00,16:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52570802778,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52570802778,https://www.airlines-manager.com/aircraft/show/110114299,21:00,23:29,228,"$65,645.00","$47,392.00"
MIA - RSW,52570802779,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559657,https://www.airlines-manager.com/network/showflight/52570802779,https://www.airlines-manager.com/aircraft/show/110114298,23:00,1:29,228,"$65,645.00","$47,392.00"
MIA - SAN,52529308472,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52529308472,https://www.airlines-manager.com/aircraft/show/92153440,1:45,12:44,310,"$685,900.00","$629,101.00"
MIA - SAN,52543755618,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52543755618,https://www.airlines-manager.com/aircraft/show/92153441,10:00,20:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52551230541,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52551230541,https://www.airlines-manager.com/aircraft/show/92137503,12:00,22:59,136,"$299,525.00","$265,786.00"
MIA - SAN,52561334736,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52561334736,https://www.airlines-manager.com/aircraft/show/92153442,17:00,3:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52566418084,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52566418084,https://www.airlines-manager.com/aircraft/show/92153439,19:00,5:59,310,"$685,900.00","$629,101.00"
MIA - SAN,52570802925,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608092,https://www.airlines-manager.com/network/showflight/52570802925,https://www.airlines-manager.com/aircraft/show/92153443,22:45,9:44,310,"$685,900.00","$629,101.00"
MIA - SAT,52529308832,MIA-BDL-SAT 3,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52529308832,https://www.airlines-manager.com/aircraft/show/107763562,3:15,9:44,320,"$410,326.00","$369,042.00"
MIA - SAT,52543755681,MIA-BDL-SAT 2,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52543755681,https://www.airlines-manager.com/aircraft/show/107763565,11:00,17:29,320,"$410,326.00","$369,042.00"
MIA - SAT,52556327723,MIA-BDL-SAT 5,ERJ-175,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52556327723,https://www.airlines-manager.com/aircraft/show/107467213,14:45,21:14,112,"$193,597.00","$169,631.00"
MIA - SAT,52566418214,MIA-BDL-SAT 4,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52566418214,https://www.airlines-manager.com/aircraft/show/107763561,20:30,2:59,320,"$410,326.00","$369,042.00"
MIA - SAT,52566418215,MIA-BDL-SAT 1,737-900ER,https://www.airlines-manager.com/network/showline/46909516,https://www.airlines-manager.com/network/showflight/52566418215,https://www.airlines-manager.com/aircraft/show/107763566,20:45,3:14,320,"$410,326.00","$369,042.00"
MIA - SAV,52529307981,MIA-OKC-FSD 2,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52529307981,https://www.airlines-manager.com/aircraft/show/110883111,0:15,3:59,310,"$214,502.00","$189,231.00"
MIA - SAV,52529307982,MIA-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52529307982,https://www.airlines-manager.com/aircraft/show/104353572,6:00,9:44,112,"$100,180.00","$84,247.00"
MIA - SAV,52543755490,MIA-OKC-FSD 1,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52543755490,https://www.airlines-manager.com/aircraft/show/110883110,9:00,12:44,310,"$214,502.00","$189,231.00"
MIA - SAV,52543755491,MIA-OKC-FSD 4,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52543755491,https://www.airlines-manager.com/aircraft/show/110883113,11:00,14:44,310,"$214,502.00","$189,231.00"
MIA - SAV,52570802852,MIA-OKC-FSD 3,A321-200,https://www.airlines-manager.com/network/showline/47780592,https://www.airlines-manager.com/network/showflight/52570802852,https://www.airlines-manager.com/aircraft/show/110883112,22:00,1:44,267,"$197,007.00","$172,256.00"
MIA - SDF,52529308141,MIA-SDF-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52529308141,https://www.airlines-manager.com/aircraft/show/94886629,0:45,6:29,310,"$354,735.00","$320,369.00"
MIA - SDF,52543755436,MIA-SDF-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52543755436,https://www.airlines-manager.com/aircraft/show/94886626,8:15,13:59,310,"$354,735.00","$320,369.00"
MIA - SDF,52551230607,MIA-SDF-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52551230607,https://www.airlines-manager.com/aircraft/show/96692674,13:00,18:44,310,"$354,735.00","$320,369.00"
MIA - SDF,52556327729,MIA-SDF-PWM 5,ERJ-175,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52556327729,https://www.airlines-manager.com/aircraft/show/105601657,15:00,20:44,112,"$167,622.00","$145,409.00"
MIA - SDF,52556327730,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52556327730,https://www.airlines-manager.com/aircraft/show/107527976,15:45,21:29,0,"$94,246.00","$69,951.00"
MIA - SDF,52561334799,MIA-SDF-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/46415148,https://www.airlines-manager.com/network/showflight/52561334799,https://www.airlines-manager.com/aircraft/show/94886625,18:00,23:44,309,"$345,720.00","$312,886.00"
MIA - SEA,52529308354,MIA-LAS-SEA 3,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52529308354,https://www.airlines-manager.com/aircraft/show/105093927,1:30,13:59,338,"$830,683.00","$762,634.00"
MIA - SEA,52543755601,MIA-LAS-SEA 4,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52543755601,https://www.airlines-manager.com/aircraft/show/105093928,10:00,22:29,338,"$830,683.00","$762,634.00"
MIA - SEA,52551230612,MIA-LAS-SEA 5,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52551230612,https://www.airlines-manager.com/aircraft/show/105093929,13:00,1:29,338,"$830,683.00","$762,634.00"
MIA - SEA,52566418208,MIA-LAS-SEA 1,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52566418208,https://www.airlines-manager.com/aircraft/show/105093925,20:30,8:59,338,"$830,683.00","$762,634.00"
MIA - SEA,52570802903,MIA-LAS-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52570802903,https://www.airlines-manager.com/aircraft/show/113251304,22:30,11:14,198,"$575,551.00","$518,274.00"
MIA - SEA,52573805927,MIA-LAS-SEA 2,A321neo,https://www.airlines-manager.com/network/showline/42449491,https://www.airlines-manager.com/network/showflight/52573805927,https://www.airlines-manager.com/aircraft/show/105093926,23:30,11:59,338,"$830,683.00","$762,634.00"
MIA - SJC,52529308456,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52529308456,https://www.airlines-manager.com/aircraft/show/107763563,1:45,13:44,320,"$731,348.00","$665,181.00"
MIA - SJC,52551230530,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52551230530,https://www.airlines-manager.com/aircraft/show/107763569,12:00,23:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52556327683,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52556327683,https://www.airlines-manager.com/aircraft/show/107763568,14:00,1:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52556327684,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52556327684,https://www.airlines-manager.com/aircraft/show/107763567,16:00,3:59,320,"$731,348.00","$665,181.00"
MIA - SJC,52573805934,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46909498,https://www.airlines-manager.com/network/showflight/52573805934,https://www.airlines-manager.com/aircraft/show/107763564,23:45,11:44,320,"$731,348.00","$665,181.00"
MIA - SJU,52529308773,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52529308773,https://www.airlines-manager.com/aircraft/show/110582841,3:15,9:29,198,"$286,591.00","$257,526.00"
MIA - SJU,52543755626,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52543755626,https://www.airlines-manager.com/aircraft/show/91352062,10:15,16:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52551230562,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52551230562,https://www.airlines-manager.com/aircraft/show/91352061,12:15,18:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52561334852,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52561334852,https://www.airlines-manager.com/aircraft/show/91352060,18:15,0:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52566418114,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52566418114,https://www.airlines-manager.com/aircraft/show/91352059,19:15,1:29,310,"$379,884.00","$343,609.00"
MIA - SJU,52570802928,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42305291,https://www.airlines-manager.com/network/showflight/52570802928,https://www.airlines-manager.com/aircraft/show/91352063,22:45,4:59,272,"$338,555.00","$303,640.00"
MIA - SKB,52529308376,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52529308376,https://www.airlines-manager.com/aircraft/show/110114298,1:30,8:29,228,"$343,645.00","$314,116.00"
MIA - SKB,52529308378,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52529308378,https://www.airlines-manager.com/aircraft/show/110114295,2:15,9:14,228,"$343,645.00","$314,116.00"
MIA - SKB,52529308454,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52529308454,https://www.airlines-manager.com/aircraft/show/110114296,3:15,10:14,228,"$343,645.00","$314,116.00"
MIA - SKB,52529308455,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52529308455,https://www.airlines-manager.com/aircraft/show/110114300,6:45,13:44,228,"$343,645.00","$314,116.00"
MIA - SKB,52556327694,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52556327694,https://www.airlines-manager.com/aircraft/show/110114299,14:00,20:59,228,"$343,645.00","$314,116.00"
MIA - SKB,52570802786,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559665,https://www.airlines-manager.com/network/showflight/52570802786,https://www.airlines-manager.com/aircraft/show/110114297,21:00,3:59,228,"$343,645.00","$314,116.00"
MIA - SLC,52529307853,MIA-SJU-BOS 2,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52529307853,https://www.airlines-manager.com/aircraft/show/91352062,0:00,10:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52529307854,MIA-SJU-BOS 4,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52529307854,https://www.airlines-manager.com/aircraft/show/91352060,1:00,11:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52529307855,MIA-SJU-BOS 3,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52529307855,https://www.airlines-manager.com/aircraft/show/91352061,2:00,12:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52543755499,MIA-SJU-BOS 5,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52543755499,https://www.airlines-manager.com/aircraft/show/91352059,9:00,19:14,310,"$641,108.00","$583,522.00"
MIA - SLC,52543755500,MIA-SJU-BOS 6 B,A319-100,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52543755500,https://www.airlines-manager.com/aircraft/show/110582841,10:00,20:14,198,"$481,802.00","$435,643.00"
MIA - SLC,52551230532,MIA-SJU-BOS 1,A321-200,https://www.airlines-manager.com/network/showline/42307240,https://www.airlines-manager.com/network/showflight/52551230532,https://www.airlines-manager.com/aircraft/show/91352063,12:00,22:14,310,"$641,108.00","$583,522.00"
MIA - SMF,52529308194,MIA-OAK-SMF 2,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52529308194,https://www.airlines-manager.com/aircraft/show/91198619,1:00,12:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52529308195,MIA-OAK-SMF 3,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52529308195,https://www.airlines-manager.com/aircraft/show/91198616,3:00,14:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52543755645,MIA-OAK-SMF 4,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52543755645,https://www.airlines-manager.com/aircraft/show/91198618,11:00,22:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52551230613,MIA-OAK-SMF 5,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52551230613,https://www.airlines-manager.com/aircraft/show/91198617,13:00,0:59,320,"$731,469.00","$667,437.00"
MIA - SMF,52570802951,MIA-OAK-SMF 1,737-900ER,https://www.airlines-manager.com/network/showline/46079200,https://www.airlines-manager.com/network/showflight/52570802951,https://www.airlines-manager.com/aircraft/show/91198615,23:00,10:59,320,"$731,469.00","$667,437.00"
MIA - STL,52529308356,MIA-ELP-MCI 1,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52529308356,https://www.airlines-manager.com/aircraft/show/91806234,1:30,7:44,320,"$391,299.00","$347,726.00"
MIA - STL,52529308357,MIA-ELP-MCI 5 B,A319-100,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52529308357,https://www.airlines-manager.com/aircraft/show/105093924,2:00,8:14,198,"$296,048.00","$265,289.00"
MIA - STL,52529308358,MIA CARGO 2,737-700,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52529308358,https://www.airlines-manager.com/aircraft/show/107527976,3:15,9:29,0,"$102,604.00","$75,263.00"
MIA - STL,52543755458,MIA-ELP-MCI 4,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52543755458,https://www.airlines-manager.com/aircraft/show/91806231,8:30,14:44,320,"$391,299.00","$347,726.00"
MIA - STL,52543755459,MIA-ELP-MCI 3,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52543755459,https://www.airlines-manager.com/aircraft/show/91806232,10:00,16:14,320,"$391,299.00","$347,726.00"
MIA - STL,52561334720,MIA-ELP-MCI 2,737-900ER,https://www.airlines-manager.com/network/showline/46040769,https://www.airlines-manager.com/network/showflight/52561334720,https://www.airlines-manager.com/aircraft/show/91806235,17:00,23:14,320,"$391,299.00","$347,726.00"
MIA - SXM,52529309089,MIA-ANU-SXM 5 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52529309089,https://www.airlines-manager.com/aircraft/show/110114299,6:45,13:44,228,"$333,406.00","$304,600.00"
MIA - SXM,52556327601,MIA-ANU-SXM 3 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52556327601,https://www.airlines-manager.com/aircraft/show/110114297,14:00,20:59,228,"$333,406.00","$304,600.00"
MIA - SXM,52556327602,MIA-ANU-SXM 4 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52556327602,https://www.airlines-manager.com/aircraft/show/110114298,16:00,22:59,228,"$333,406.00","$304,600.00"
MIA - SXM,52566418112,MIA-ANU-SXM 1 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52566418112,https://www.airlines-manager.com/aircraft/show/110114295,19:15,2:14,228,"$333,406.00","$304,600.00"
MIA - SXM,52566418113,MIA-ANU-SXM 2 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52566418113,https://www.airlines-manager.com/aircraft/show/110114296,20:15,3:14,228,"$333,406.00","$304,600.00"
MIA - SXM,52573805948,MIA-ANU-SXM 6 S,A319-100,https://www.airlines-manager.com/network/showline/47559751,https://www.airlines-manager.com/network/showflight/52573805948,https://www.airlines-manager.com/aircraft/show/110114300,23:45,6:44,228,"$333,406.00","$304,600.00"
MIA - TPA,52529309050,MIA-BUR-PVD 1,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52529309050,https://www.airlines-manager.com/aircraft/show/108834803,5:00,7:59,310,"$127,588.00","$101,572.00"
MIA - TPA,52543755662,MIA-BUR-PVD 3,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52543755662,https://www.airlines-manager.com/aircraft/show/108834805,11:00,13:59,310,"$127,588.00","$101,572.00"
MIA - TPA,52561334710,MIA-BUR-PVD 5 B,A319-100,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52561334710,https://www.airlines-manager.com/aircraft/show/108834807,17:00,19:59,198,"$95,213.00","$74,392.00"
MIA - TPA,52561334711,MIA-BUR-PVD 2,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52561334711,https://www.airlines-manager.com/aircraft/show/108834804,17:45,20:44,310,"$127,588.00","$101,572.00"
MIA - TPA,52573805932,MIA-BUR-PVD 4,A321-200,https://www.airlines-manager.com/network/showline/47218374,https://www.airlines-manager.com/network/showflight/52573805932,https://www.airlines-manager.com/aircraft/show/108834806,23:45,2:44,310,"$127,588.00","$101,572.00"
MIA - TUL,52529308170,MIA-FAR-TUL 2,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52529308170,https://www.airlines-manager.com/aircraft/show/110883160,0:45,7:29,320,"$415,780.00","$374,339.00"
MIA - TUL,52529308171,MIA-FAR-TUL 5,ERJ-175,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52529308171,https://www.airlines-manager.com/aircraft/show/87169421,3:00,9:44,112,"$196,111.00","$171,987.00"
MIA - TUL,52543755670,MIA-FAR-TUL 3,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52543755670,https://www.airlines-manager.com/aircraft/show/110883161,11:00,17:44,320,"$415,780.00","$374,339.00"
MIA - TUL,52556327842,MIA-FAR-TUL 4,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52556327842,https://www.airlines-manager.com/aircraft/show/110883162,16:00,22:44,320,"$415,780.00","$374,339.00"
MIA - TUL,52566418139,MIA-FAR-TUL 1,737-900ER,https://www.airlines-manager.com/network/showline/47780432,https://www.airlines-manager.com/network/showflight/52566418139,https://www.airlines-manager.com/aircraft/show/110883159,19:45,2:29,320,"$415,780.00","$374,339.00"
MIA - TUS,52529308040,MIA-IAD-TUS 3,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52529308040,https://www.airlines-manager.com/aircraft/show/97556719,0:30,9:59,310,"$591,145.00","$542,540.00"
MIA - TUS,52543755566,MIA-IAD-TUS 2,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52543755566,https://www.airlines-manager.com/aircraft/show/97556720,10:00,19:29,310,"$591,145.00","$542,540.00"
MIA - TUS,52551230644,MIA-IAD-TUS 5,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52551230644,https://www.airlines-manager.com/aircraft/show/97556716,13:00,22:29,310,"$591,145.00","$542,540.00"
MIA - TUS,52556327809,MIA-IAD-TUS 1,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52556327809,https://www.airlines-manager.com/aircraft/show/97556721,15:45,1:14,310,"$591,145.00","$542,540.00"
MIA - TUS,52566418041,MIA-IAD-TUS 4,A321-200,https://www.airlines-manager.com/network/showline/44372840,https://www.airlines-manager.com/network/showflight/52566418041,https://www.airlines-manager.com/aircraft/show/97556718,18:45,4:14,310,"$591,145.00","$542,540.00"
MIA - TYS,52529308869,MIA-CID-BHM 4,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52529308869,https://www.airlines-manager.com/aircraft/show/116789650,3:30,8:29,310,"$314,343.00","$284,950.00"
MIA - TYS,52543755553,MIA-CID-BHM 3,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52543755553,https://www.airlines-manager.com/aircraft/show/116789651,10:00,14:59,310,"$314,343.00","$284,950.00"
MIA - TYS,52556327724,MIA-CID-BHM 2,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52556327724,https://www.airlines-manager.com/aircraft/show/116789652,14:45,19:44,310,"$314,343.00","$284,950.00"
MIA - TYS,52570802854,MIA-CID-BHM 1,A321-200,https://www.airlines-manager.com/network/showline/49493182,https://www.airlines-manager.com/network/showflight/52570802854,https://www.airlines-manager.com/aircraft/show/116789653,22:00,2:59,310,"$314,343.00","$284,950.00"
MIA - YUL,52529309087,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52529309087,https://www.airlines-manager.com/aircraft/show/113101225,6:30,13:59,400,"$628,064.00","$573,757.00"
MIA - YUL,52543755680,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52543755680,https://www.airlines-manager.com/aircraft/show/113101226,11:00,18:29,400,"$628,064.00","$573,757.00"
MIA - YUL,52556327770,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52556327770,https://www.airlines-manager.com/aircraft/show/113101227,15:00,22:29,400,"$628,064.00","$573,757.00"
MIA - YUL,52573805935,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487803,https://www.airlines-manager.com/network/showflight/52573805935,https://www.airlines-manager.com/aircraft/show/113101224,23:45,7:14,400,"$628,064.00","$573,757.00"
MIA - YVR,52543755671,MIA-YVR-YUL-1,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52543755671,https://www.airlines-manager.com/aircraft/show/113101224,11:00,23:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52556327651,MIA-YVR-YUL-2,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52556327651,https://www.airlines-manager.com/aircraft/show/113101225,14:00,2:44,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52566418030,MIA-YVR-YUL-3,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52566418030,https://www.airlines-manager.com/aircraft/show/113101226,18:30,7:14,400,"$1,044,287.00","$959,641.00"
MIA - YVR,52570802898,MIA-YVR-YUL-4,757-300,https://www.airlines-manager.com/network/showline/48487816,https://www.airlines-manager.com/network/showflight/52570802898,https://www.airlines-manager.com/aircraft/show/113101227,22:30,11:14,400,"$1,044,287.00","$959,641.00"
MIA - YYC,52529307862,MIA-SJC-YYC 1,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52529307862,https://www.airlines-manager.com/aircraft/show/107763569,0:00,11:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52529307863,MIA-SJC-YYC 2,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52529307863,https://www.airlines-manager.com/aircraft/show/107763568,2:00,13:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52529307864,MIA-SJC-YYC 3,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52529307864,https://www.airlines-manager.com/aircraft/show/107763567,4:00,15:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52551230529,MIA-SJC-YYC 4,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52551230529,https://www.airlines-manager.com/aircraft/show/107763564,12:00,23:44,320,"$729,879.00","$661,283.00"
MIA - YYC,52556327688,MIA-SJC-YYC 5,737-900ER,https://www.airlines-manager.com/network/showline/46936719,https://www.airlines-manager.com/network/showflight/52556327688,https://www.airlines-manager.com/aircraft/show/107763563,14:00,1:44,320,"$729,879.00","$661,283.00"
MIA - YYZ,52529308719,MIA-BWI-YYZ 3,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52529308719,https://www.airlines-manager.com/aircraft/show/92153441,2:45,9:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,52529308720,MIA-BWI-YYZ 6 S,ERJ-175,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52529308720,https://www.airlines-manager.com/aircraft/show/92137503,4:45,11:44,136,"$191,092.00","$163,234.00"
MIA - YYZ,52543755619,MIA-BWI-YYZ 4,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52543755619,https://www.airlines-manager.com/aircraft/show/92153442,10:00,16:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,52551230537,MIA-BWI-YYZ 5,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52551230537,https://www.airlines-manager.com/aircraft/show/92153439,12:00,18:59,310,"$441,057.00","$394,317.00"
MIA - YYZ,52556327821,MIA-BWI-YYZ 1,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52556327821,https://www.airlines-manager.com/aircraft/show/92153443,15:45,22:44,310,"$441,057.00","$394,317.00"
MIA - YYZ,52566418043,MIA-BWI-YYZ 2,A321-200,https://www.airlines-manager.com/network/showline/42608081,https://www.airlines-manager.com/network/showflight/52566418043,https://www.airlines-manager.com/aircraft/show/92153440,18:45,1:44,309,"$438,582.00","$391,893.00"
SFO - ABQ,52543755476,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52543755476,https://www.airlines-manager.com/aircraft/show/88239553,8:45,14:14,320,"$349,725.00","$309,674.00"
SFO - ABQ,52543755477,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52543755477,https://www.airlines-manager.com/aircraft/show/105223003,8:45,14:14,198,"$265,591.00","$237,461.00"
SFO - ABQ,52543755478,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52543755478,https://www.airlines-manager.com/aircraft/show/88239557,10:30,15:59,320,"$349,725.00","$309,674.00"
SFO - ABQ,52556327786,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52556327786,https://www.airlines-manager.com/aircraft/show/88239555,15:00,20:29,320,"$349,725.00","$309,674.00"
SFO - ABQ,52570802932,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129446,https://www.airlines-manager.com/network/showflight/52570802932,https://www.airlines-manager.com/aircraft/show/88239554,22:45,4:14,320,"$349,725.00","$309,674.00"
SFO - ALB,52529308033,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52529308033,https://www.airlines-manager.com/aircraft/show/112650097,0:30,12:29,310,"$733,654.00","$677,490.00"
SFO - ALB,52529308034,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52529308034,https://www.airlines-manager.com/aircraft/show/112650096,5:30,17:29,310,"$733,654.00","$677,490.00"
SFO - ALB,52543755385,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52543755385,https://www.airlines-manager.com/aircraft/show/112650090,7:30,19:29,198,"$548,904.00","$503,863.00"
SFO - ALB,52556327654,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52556327654,https://www.airlines-manager.com/aircraft/show/112650099,14:00,1:59,310,"$733,654.00","$677,490.00"
SFO - ALB,52561334794,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344109,https://www.airlines-manager.com/network/showflight/52561334794,https://www.airlines-manager.com/aircraft/show/112650098,18:00,5:59,310,"$733,654.00","$677,490.00"
SFO - ANC,52529308703,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52529308703,https://www.airlines-manager.com/aircraft/show/106255848,2:30,12:14,338,"$662,478.00","$614,434.00"
SFO - ANC,52529308705,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52529308705,https://www.airlines-manager.com/aircraft/show/106255849,3:30,13:14,338,"$662,478.00","$614,434.00"
SFO - ANC,52566418086,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52566418086,https://www.airlines-manager.com/aircraft/show/106255845,19:00,4:44,338,"$662,478.00","$614,434.00"
SFO - ANC,52566418087,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52566418087,https://www.airlines-manager.com/aircraft/show/106255846,20:00,5:44,338,"$662,478.00","$614,434.00"
SFO - ANC,52570802757,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/43539143,https://www.airlines-manager.com/network/showflight/52570802757,https://www.airlines-manager.com/aircraft/show/106255847,21:00,6:44,338,"$662,478.00","$614,434.00"
SFO - ATL,52529309091,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52529309091,https://www.airlines-manager.com/aircraft/show/85806724,6:45,16:29,932,"$1,616,204.00","$1,419,936.00"
SFO - ATL,52556327741,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52556327741,https://www.airlines-manager.com/aircraft/show/106766698,15:00,1:29,232,"$628,810.00","$548,070.00"
SFO - ATL,52566418011,SFO 84A-2 E1,777-300,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52566418011,https://www.airlines-manager.com/aircraft/show/86776211,18:30,4:14,853,"$1,518,560.00","$1,327,991.00"
SFO - ATL,52566418012,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/40852416,https://www.airlines-manager.com/network/showflight/52566418012,https://www.airlines-manager.com/aircraft/show/107467212,20:00,6:29,56,"$233,331.00","$186,066.00"
SFO - AUS,52529308166,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52529308166,https://www.airlines-manager.com/aircraft/show/92773481,0:45,8:44,310,"$500,912.00","$456,659.00"
SFO - AUS,52529308167,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52529308167,https://www.airlines-manager.com/aircraft/show/92773480,2:45,10:44,310,"$500,912.00","$456,659.00"
SFO - AUS,52551230665,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52551230665,https://www.airlines-manager.com/aircraft/show/92773479,13:30,21:29,310,"$500,912.00","$456,659.00"
SFO - AUS,52556327801,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52556327801,https://www.airlines-manager.com/aircraft/show/92773478,15:30,23:29,310,"$500,912.00","$456,659.00"
SFO - AUS,52566418032,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270795,https://www.airlines-manager.com/network/showflight/52566418032,https://www.airlines-manager.com/aircraft/show/92773477,18:30,2:29,309,"$498,045.00","$453,854.00"
SFO - BDL,52529309037,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52529309037,https://www.airlines-manager.com/aircraft/show/84915098,4:45,16:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52529309038,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52529309038,https://www.airlines-manager.com/aircraft/show/84915099,6:45,18:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52543755471,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52543755471,https://www.airlines-manager.com/aircraft/show/84915102,8:45,20:59,320,"$741,620.00","$677,502.00"
SFO - BDL,52561334708,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52561334708,https://www.airlines-manager.com/aircraft/show/84915100,17:00,5:14,320,"$741,620.00","$677,502.00"
SFO - BDL,52566418078,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540540,https://www.airlines-manager.com/network/showflight/52566418078,https://www.airlines-manager.com/aircraft/show/84915101,19:00,7:14,320,"$741,620.00","$677,502.00"
SFO - BFF,52529308201,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52529308201,https://www.airlines-manager.com/aircraft/show/114912306,1:00,7:14,112,"$183,501.00","$161,112.00"
SFO - BFF,52529308202,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52529308202,https://www.airlines-manager.com/aircraft/show/114912268,2:15,8:29,310,"$389,498.00","$355,202.00"
SFO - BFF,52543755423,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52543755423,https://www.airlines-manager.com/aircraft/show/114912263,8:15,14:29,310,"$389,498.00","$355,202.00"
SFO - BFF,52556327851,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52556327851,https://www.airlines-manager.com/aircraft/show/114912264,16:00,22:14,310,"$389,498.00","$355,202.00"
SFO - BFF,52573805924,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034235,https://www.airlines-manager.com/network/showflight/52573805924,https://www.airlines-manager.com/aircraft/show/114912267,23:30,5:44,310,"$389,498.00","$355,202.00"
SFO - BNA,52529308317,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52529308317,https://www.airlines-manager.com/aircraft/show/103365580,1:15,10:59,320,"$605,443.00","$549,166.00"
SFO - BNA,52529308318,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52529308318,https://www.airlines-manager.com/aircraft/show/82323681,6:00,15:44,112,"$284,931.00","$251,071.00"
SFO - BNA,52551230622,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52551230622,https://www.airlines-manager.com/aircraft/show/103365583,13:00,22:44,320,"$605,443.00","$549,166.00"
SFO - BNA,52556327748,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52556327748,https://www.airlines-manager.com/aircraft/show/103365582,15:00,0:44,320,"$605,443.00","$549,166.00"
SFO - BNA,52556327749,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52556327749,https://www.airlines-manager.com/aircraft/show/103365579,15:45,1:29,320,"$605,443.00","$549,166.00"
SFO - BNA,52573805899,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364406,https://www.airlines-manager.com/network/showflight/52573805899,https://www.airlines-manager.com/aircraft/show/103365581,23:15,8:59,320,"$605,443.00","$549,166.00"
SFO - BOI,52529308332,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52529308332,https://www.airlines-manager.com/aircraft/show/92519369,1:15,5:29,320,"$247,136.00","$216,401.00"
SFO - BOI,52543755543,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52543755543,https://www.airlines-manager.com/aircraft/show/92519368,9:45,13:59,320,"$247,136.00","$216,401.00"
SFO - BOI,52556327716,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52556327716,https://www.airlines-manager.com/aircraft/show/92519371,14:45,18:59,320,"$247,136.00","$216,401.00"
SFO - BOI,52556327717,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45950031,https://www.airlines-manager.com/network/showflight/52556327717,https://www.airlines-manager.com/aircraft/show/92519367,16:00,20:14,320,"$247,136.00","$216,401.00"
SFO - BOS,52529307892,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52529307892,https://www.airlines-manager.com/aircraft/show/104864961,0:15,12:44,338,"$837,739.00","$774,382.00"
SFO - BOS,52551230533,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52551230533,https://www.airlines-manager.com/aircraft/show/107573128,12:00,0:29,0,"$212,067.00","$161,164.00"
SFO - BOS,52551230534,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52551230534,https://www.airlines-manager.com/aircraft/show/104901564,13:00,1:29,338,"$837,739.00","$774,382.00"
SFO - BOS,52556327622,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52556327622,https://www.airlines-manager.com/aircraft/show/104870960,14:00,2:29,338,"$837,739.00","$774,382.00"
SFO - BOS,52556327623,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52556327623,https://www.airlines-manager.com/aircraft/show/104874465,15:45,4:14,338,"$837,739.00","$774,382.00"
SFO - BOS,52566418195,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40229885,https://www.airlines-manager.com/network/showflight/52566418195,https://www.airlines-manager.com/aircraft/show/104901544,20:15,8:44,337,"$836,195.00","$772,900.00"
SFO - BTV,52529307856,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52529307856,https://www.airlines-manager.com/aircraft/show/112650092,0:00,11:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52529307857,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52529307857,https://www.airlines-manager.com/aircraft/show/112650089,6:00,17:59,198,"$546,558.00","$501,659.00"
SFO - BTV,52556327673,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52556327673,https://www.airlines-manager.com/aircraft/show/112650095,14:00,1:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52561334798,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52561334798,https://www.airlines-manager.com/aircraft/show/112650094,18:00,5:59,310,"$729,754.00","$673,769.00"
SFO - BTV,52566418174,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344140,https://www.airlines-manager.com/network/showflight/52566418174,https://www.airlines-manager.com/aircraft/show/112650093,20:00,7:59,310,"$729,754.00","$673,769.00"
SFO - BUF,52529308344,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52529308344,https://www.airlines-manager.com/aircraft/show/112650108,1:30,12:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52529308345,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52529308345,https://www.airlines-manager.com/aircraft/show/112650107,5:30,16:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52543755363,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52543755363,https://www.airlines-manager.com/aircraft/show/112650106,7:30,18:29,310,"$687,178.00","$633,720.00"
SFO - BUF,52551230590,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52551230590,https://www.airlines-manager.com/aircraft/show/112650105,13:00,23:59,310,"$687,178.00","$633,720.00"
SFO - BUF,52561334797,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344051,https://www.airlines-manager.com/network/showflight/52561334797,https://www.airlines-manager.com/aircraft/show/112650104,18:00,4:59,309,"$685,844.00","$632,450.00"
SFO - BUR,52529308673,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52529308673,https://www.airlines-manager.com/aircraft/show/114912265,2:15,5:44,310,"$173,403.00","$150,893.00"
SFO - BUR,52529308676,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52529308676,https://www.airlines-manager.com/aircraft/show/114912270,4:15,7:44,310,"$173,403.00","$150,893.00"
SFO - BUR,52551230472,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52551230472,https://www.airlines-manager.com/aircraft/show/114917486,11:30,14:59,198,"$130,672.00","$112,650.00"
SFO - BUR,52556327803,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52556327803,https://www.airlines-manager.com/aircraft/show/114912269,15:30,18:59,310,"$173,403.00","$150,893.00"
SFO - BUR,52561334698,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034211,https://www.airlines-manager.com/network/showflight/52561334698,https://www.airlines-manager.com/aircraft/show/114912266,17:00,20:29,310,"$173,403.00","$150,893.00"
SFO - BWI,52529308041,SFO CARGO 2,737-700,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52529308041,https://www.airlines-manager.com/aircraft/show/107573128,0:30,11:59,0,"$197,290.00","$150,551.00"
SFO - BWI,52529308042,SFO-BWI-ANC 1,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52529308042,https://www.airlines-manager.com/aircraft/show/106255845,4:45,16:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52529308043,SFO-BWI-ANC 2,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52529308043,https://www.airlines-manager.com/aircraft/show/106255846,5:45,17:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52529308044,SFO-BWI-ANC 3,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52529308044,https://www.airlines-manager.com/aircraft/show/106255847,6:45,18:14,338,"$784,984.00","$726,601.00"
SFO - BWI,52556327768,SFO-BWI-ANC 4,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52556327768,https://www.airlines-manager.com/aircraft/show/106255848,15:00,2:29,338,"$784,984.00","$726,601.00"
SFO - BWI,52556327769,SFO-BWI-ANC 5,A321neo,https://www.airlines-manager.com/network/showline/40230066,https://www.airlines-manager.com/network/showflight/52556327769,https://www.airlines-manager.com/aircraft/show/106255849,16:00,3:29,337,"$781,013.00","$722,714.00"
SFO - CAK,52529308552,SFO-ALB-CAK 1,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52529308552,https://www.airlines-manager.com/aircraft/show/112650099,2:00,12:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52529308554,SFO-ALB-CAK 2,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52529308554,https://www.airlines-manager.com/aircraft/show/112650098,6:00,16:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52556327653,SFO-ALB-CAK 3,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52556327653,https://www.airlines-manager.com/aircraft/show/112650097,14:00,0:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52566418062,SFO-ALB-CAK 4,A321-200,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52566418062,https://www.airlines-manager.com/aircraft/show/112650096,19:00,5:29,310,"$657,790.00","$607,616.00"
SFO - CAK,52570802777,SFO-ALB-CAK 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344107,https://www.airlines-manager.com/network/showflight/52570802777,https://www.airlines-manager.com/aircraft/show/112650090,21:00,7:29,198,"$494,209.00","$453,976.00"
SFO - CHS,52529308338,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52529308338,https://www.airlines-manager.com/aircraft/show/114917465,1:30,12:44,320,"$701,518.00","$642,369.00"
SFO - CHS,52529308339,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52529308339,https://www.airlines-manager.com/aircraft/show/114917464,5:30,16:44,320,"$701,518.00","$642,369.00"
SFO - CHS,52543755446,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52543755446,https://www.airlines-manager.com/aircraft/show/114912262,8:30,19:59,198,"$529,108.00","$485,851.00"
SFO - CHS,52551230581,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52551230581,https://www.airlines-manager.com/aircraft/show/114917463,13:00,0:14,320,"$701,518.00","$642,369.00"
SFO - CHS,52561334700,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035983,https://www.airlines-manager.com/network/showflight/52561334700,https://www.airlines-manager.com/aircraft/show/114266973,17:00,4:14,320,"$701,518.00","$642,369.00"
SFO - CLE,52529309062,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52529309062,https://www.airlines-manager.com/aircraft/show/92519369,5:30,15:59,320,"$650,884.00","$593,165.00"
SFO - CLE,52529309063,SFO-ATL-CLE,ERJ-175,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52529309063,https://www.airlines-manager.com/aircraft/show/107467212,6:30,16:59,112,"$305,841.00","$270,700.00"
SFO - CLE,52543755384,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52543755384,https://www.airlines-manager.com/aircraft/show/92519370,7:30,17:59,320,"$650,884.00","$593,165.00"
SFO - CLE,52556327630,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52556327630,https://www.airlines-manager.com/aircraft/show/92519368,14:00,0:29,320,"$650,884.00","$593,165.00"
SFO - CLE,52566418089,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52566418089,https://www.airlines-manager.com/aircraft/show/92519371,19:00,5:29,320,"$650,884.00","$593,165.00"
SFO - CLE,52566418090,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45959453,https://www.airlines-manager.com/network/showflight/52566418090,https://www.airlines-manager.com/aircraft/show/92519367,20:15,6:44,319,"$649,617.00","$591,956.00"
SFO - CLT,52529307823,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52529307823,https://www.airlines-manager.com/aircraft/show/96135563,0:00,10:44,400,"$888,985.00","$809,020.00"
SFO - CLT,52529307824,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52529307824,https://www.airlines-manager.com/aircraft/show/96135562,6:00,16:44,400,"$888,985.00","$809,020.00"
SFO - CLT,52551230663,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52551230663,https://www.airlines-manager.com/aircraft/show/96135565,13:15,23:59,400,"$888,985.00","$809,020.00"
SFO - CLT,52556327799,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52556327799,https://www.airlines-manager.com/aircraft/show/96135561,15:15,1:59,400,"$888,985.00","$809,020.00"
SFO - CLT,52561334747,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43894395,https://www.airlines-manager.com/network/showflight/52561334747,https://www.airlines-manager.com/aircraft/show/96135564,17:15,3:59,400,"$888,985.00","$809,020.00"
SFO - CMH,52529308168,SFO-BNA-CMH 2,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52529308168,https://www.airlines-manager.com/aircraft/show/103365582,0:45,10:59,320,"$635,841.00","$578,544.00"
SFO - CMH,52529308169,SFO-BNA-CMH 5,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52529308169,https://www.airlines-manager.com/aircraft/show/103365579,5:30,15:44,320,"$635,841.00","$578,544.00"
SFO - CMH,52551230621,SFO-BNA-CMH 3,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52551230621,https://www.airlines-manager.com/aircraft/show/103365581,13:00,23:14,320,"$635,841.00","$578,544.00"
SFO - CMH,52556327755,SFO-BNA-CMH 4,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52556327755,https://www.airlines-manager.com/aircraft/show/103365580,15:00,1:14,320,"$635,841.00","$578,544.00"
SFO - CMH,52556327756,SFO-BNA-CMH 6,ERJ-175,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52556327756,https://www.airlines-manager.com/aircraft/show/82323681,15:45,1:59,112,"$299,371.00","$264,561.00"
SFO - CMH,52570802938,SFO-BNA-CMH 1,737-900ER,https://www.airlines-manager.com/network/showline/45364394,https://www.airlines-manager.com/network/showflight/52570802938,https://www.airlines-manager.com/aircraft/show/103365583,22:45,8:59,320,"$635,841.00","$578,544.00"
SFO - CVG,52529309047,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52529309047,https://www.airlines-manager.com/aircraft/show/99316504,5:00,14:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52529309048,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52529309048,https://www.airlines-manager.com/aircraft/show/99316502,7:00,16:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52551230633,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52551230633,https://www.airlines-manager.com/aircraft/show/99316505,13:00,22:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52556327742,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52556327742,https://www.airlines-manager.com/aircraft/show/99316503,15:00,0:59,310,"$627,103.00","$574,076.00"
SFO - CVG,52561334732,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52561334732,https://www.airlines-manager.com/aircraft/show/99174346,17:00,2:59,112,"$294,049.00","$258,686.00"
SFO - CVG,52570802927,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44892288,https://www.airlines-manager.com/network/showflight/52570802927,https://www.airlines-manager.com/aircraft/show/99316506,22:45,8:44,310,"$627,103.00","$574,076.00"
SFO - DEL,52529307840,SFO 168B-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52529307840,https://www.airlines-manager.com/aircraft/show/86832727,0:00,5:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEL,52529307841,SFO 168A-1 B,747-400,https://www.airlines-manager.com/network/showline/41242837,https://www.airlines-manager.com/network/showflight/52529307841,https://www.airlines-manager.com/aircraft/show/86969602,2:00,7:29,1046,"$5,780,645.00","$5,362,076.00"
SFO - DEN,52529308006,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52529308006,https://www.airlines-manager.com/aircraft/show/101045335,0:15,5:59,400,"$472,973.00","$405,009.00"
SFO - DEN,52529308007,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52529308007,https://www.airlines-manager.com/aircraft/show/101045339,6:30,12:14,400,"$472,973.00","$405,009.00"
SFO - DEN,52543755456,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52543755456,https://www.airlines-manager.com/aircraft/show/101045336,8:30,14:14,400,"$472,973.00","$405,009.00"
SFO - DEN,52551230628,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52551230628,https://www.airlines-manager.com/aircraft/show/101045337,13:00,18:44,400,"$472,973.00","$405,009.00"
SFO - DEN,52570802889,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40738405,https://www.airlines-manager.com/network/showflight/52570802889,https://www.airlines-manager.com/aircraft/show/101045338,22:15,3:59,376,"$456,272.00","$388,909.00"
SFO - DFW,52529308359,SFO-ATL-DFW S,A321-200,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52529308359,https://www.airlines-manager.com/aircraft/show/106766698,1:30,9:14,232,"$480,945.00","$419,712.00"
SFO - DFW,52561334676,SFO 84A-6 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52561334676,https://www.airlines-manager.com/aircraft/show/85806724,16:30,23:59,932,"$1,227,121.00","$1,082,026.00"
SFO - DFW,52573805909,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40852421,https://www.airlines-manager.com/network/showflight/52573805909,https://www.airlines-manager.com/aircraft/show/85537213,23:15,6:44,737,"$1,045,407.00","$909,944.00"
SFO - DSM,52529309028,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52529309028,https://www.airlines-manager.com/aircraft/show/108410858,4:30,12:29,320,"$506,454.00","$460,616.00"
SFO - DSM,52551230600,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52551230600,https://www.airlines-manager.com/aircraft/show/108410857,13:00,20:59,320,"$506,454.00","$460,616.00"
SFO - DSM,52556327751,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52556327751,https://www.airlines-manager.com/aircraft/show/108466264,15:00,23:14,112,"$239,910.00","$212,489.00"
SFO - DSM,52570802940,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52570802940,https://www.airlines-manager.com/aircraft/show/108410856,22:45,6:44,320,"$506,454.00","$460,616.00"
SFO - DSM,52573805921,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065667,https://www.airlines-manager.com/network/showflight/52573805921,https://www.airlines-manager.com/aircraft/show/108410859,23:30,7:29,320,"$506,454.00","$460,616.00"
SFO - DTW,52529309029,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52529309029,https://www.airlines-manager.com/aircraft/show/101045331,4:30,14:29,400,"$819,471.00","$744,348.00"
SFO - DTW,52529309030,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52529309030,https://www.airlines-manager.com/aircraft/show/101045332,5:00,14:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52556327752,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52556327752,https://www.airlines-manager.com/aircraft/show/101045333,15:00,0:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52561334697,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52561334697,https://www.airlines-manager.com/aircraft/show/101045330,17:00,2:59,400,"$819,471.00","$744,348.00"
SFO - DTW,52570802860,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739130,https://www.airlines-manager.com/network/showflight/52570802860,https://www.airlines-manager.com/aircraft/show/101045334,22:00,7:59,400,"$819,471.00","$744,348.00"
SFO - DXB,52529309065,SFO 168B-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52529309065,https://www.airlines-manager.com/aircraft/show/87566901,5:30,12:29,1046,"$5,984,768.00","$5,519,580.00"
SFO - DXB,52543755379,SFO 168A-2 B,747-400,https://www.airlines-manager.com/network/showline/41150917,https://www.airlines-manager.com/network/showflight/52543755379,https://www.airlines-manager.com/aircraft/show/86596991,7:30,14:29,1045,"$5,980,703.00","$5,515,766.00"
SFO - ELP,52529309071,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52529309071,https://www.airlines-manager.com/aircraft/show/114912267,5:45,11:44,310,"$374,636.00","$339,864.00"
SFO - ELP,52529309072,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52529309072,https://www.airlines-manager.com/aircraft/show/114912306,7:15,13:14,112,"$177,417.00","$154,823.00"
SFO - ELP,52543755462,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52543755462,https://www.airlines-manager.com/aircraft/show/114912268,8:30,14:29,310,"$374,636.00","$339,864.00"
SFO - ELP,52556327747,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52556327747,https://www.airlines-manager.com/aircraft/show/114912263,15:00,20:59,310,"$374,636.00","$339,864.00"
SFO - ELP,52570802879,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034229,https://www.airlines-manager.com/network/showflight/52570802879,https://www.airlines-manager.com/aircraft/show/114912264,22:15,4:14,309,"$373,531.00","$338,793.00"
SFO - FAT,52529308550,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52529308550,https://www.airlines-manager.com/aircraft/show/108410857,2:00,4:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52551230484,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52551230484,https://www.airlines-manager.com/aircraft/show/108410856,11:45,14:29,320,"$95,269.00","$71,073.00"
SFO - FAT,52551230485,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52551230485,https://www.airlines-manager.com/aircraft/show/108410859,13:00,15:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52561334846,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52561334846,https://www.airlines-manager.com/aircraft/show/108410858,18:00,20:44,320,"$95,269.00","$71,073.00"
SFO - FAT,52573805905,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065660,https://www.airlines-manager.com/network/showflight/52573805905,https://www.airlines-manager.com/aircraft/show/108466264,23:15,1:59,66,"$33,249.00","$21,005.00"
SFO - FLL,52529307986,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52529307986,https://www.airlines-manager.com/aircraft/show/97955543,0:15,12:14,320,"$736,189.00","$668,161.00"
SFO - FLL,52529307987,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52529307987,https://www.airlines-manager.com/aircraft/show/97955541,4:15,16:14,320,"$736,189.00","$668,161.00"
SFO - FLL,52543755366,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52543755366,https://www.airlines-manager.com/aircraft/show/97900729,7:30,19:44,198,"$553,643.00","$504,164.00"
SFO - FLL,52551230643,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52551230643,https://www.airlines-manager.com/aircraft/show/97955544,13:00,0:59,320,"$736,189.00","$668,161.00"
SFO - FLL,52561334734,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52561334734,https://www.airlines-manager.com/aircraft/show/97955542,17:00,4:59,320,"$736,189.00","$668,161.00"
SFO - FLL,52566418165,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44448463,https://www.airlines-manager.com/network/showflight/52566418165,https://www.airlines-manager.com/aircraft/show/97955540,20:00,7:59,320,"$736,189.00","$668,161.00"
SFO - FSD,52529308015,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52529308015,https://www.airlines-manager.com/aircraft/show/107160378,0:30,7:59,320,"$469,686.00","$426,404.00"
SFO - FSD,52529308016,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52529308016,https://www.airlines-manager.com/aircraft/show/107132310,2:00,9:29,112,"$222,328.00","$196,609.00"
SFO - FSD,52529308017,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52529308017,https://www.airlines-manager.com/aircraft/show/107160381,3:00,10:29,320,"$469,686.00","$426,404.00"
SFO - FSD,52543755400,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52543755400,https://www.airlines-manager.com/aircraft/show/107160380,8:00,15:29,320,"$469,686.00","$426,404.00"
SFO - FSD,52556327827,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719662,https://www.airlines-manager.com/network/showflight/52556327827,https://www.airlines-manager.com/aircraft/show/107160379,16:00,23:29,284,"$437,153.00","$395,227.00"
SFO - HKG,52570802788,SFO 168B-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52570802788,https://www.airlines-manager.com/aircraft/show/87083947,21:15,23:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - HKG,52573805910,SFO 168A-6 B,747-400,https://www.airlines-manager.com/network/showline/40783037,https://www.airlines-manager.com/network/showflight/52573805910,https://www.airlines-manager.com/aircraft/show/88032836,23:15,1:59,1046,"$5,254,397.00","$4,855,808.00"
SFO - IAD,52529307818,SFO-IAD-CLT 1,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52529307818,https://www.airlines-manager.com/aircraft/show/96135565,0:00,11:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52529307819,SFO-IAD-CLT 5,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52529307819,https://www.airlines-manager.com/aircraft/show/96135561,4:00,15:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52529307820,SFO-IAD-CLT 2,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52529307820,https://www.airlines-manager.com/aircraft/show/96135564,6:00,17:14,400,"$907,805.00","$829,787.00"
SFO - IAD,52551230574,SFO-IAD-CLT 3,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52551230574,https://www.airlines-manager.com/aircraft/show/96135563,12:45,23:59,400,"$907,805.00","$829,787.00"
SFO - IAD,52561334689,SFO-IAD-CLT 4,757-300,https://www.airlines-manager.com/network/showline/43924778,https://www.airlines-manager.com/network/showflight/52561334689,https://www.airlines-manager.com/aircraft/show/96135562,16:45,3:59,400,"$907,805.00","$829,787.00"
SFO - IAH,52529309039,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52529309039,https://www.airlines-manager.com/aircraft/show/101045338,4:45,12:59,400,"$691,401.00","$621,593.00"
SFO - IAH,52529309040,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52529309040,https://www.airlines-manager.com/aircraft/show/101045335,6:45,14:59,400,"$691,401.00","$621,593.00"
SFO - IAH,52551230630,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52551230630,https://www.airlines-manager.com/aircraft/show/101045339,13:00,21:14,400,"$691,401.00","$621,593.00"
SFO - IAH,52556327792,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52556327792,https://www.airlines-manager.com/aircraft/show/101045336,15:00,23:14,400,"$691,401.00","$621,593.00"
SFO - IAH,52566418131,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/40762091,https://www.airlines-manager.com/network/showflight/52566418131,https://www.airlines-manager.com/aircraft/show/101045337,19:30,3:44,400,"$691,401.00","$621,593.00"
SFO - ICN,52529307997,SFO 84A-5 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52529307997,https://www.airlines-manager.com/aircraft/show/85537213,0:15,22:44,932,"$3,588,930.00","$3,238,907.00"
SFO - ICN,52551230594,SFO-ICN B,787-10,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52551230594,https://www.airlines-manager.com/aircraft/show/110213648,13:00,10:59,592,"$2,626,626.00","$2,428,753.00"
SFO - ICN,52566418176,SFO 84A-1 E1,777-300,https://www.airlines-manager.com/network/showline/40609625,https://www.airlines-manager.com/network/showflight/52566418176,https://www.airlines-manager.com/aircraft/show/86776212,20:00,18:29,864,"$3,396,579.00","$3,059,582.00"
SFO - ICT,52529308144,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52529308144,https://www.airlines-manager.com/aircraft/show/114912263,0:45,8:14,310,"$467,131.00","$427,996.00"
SFO - ICT,52543755419,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52543755419,https://www.airlines-manager.com/aircraft/show/114912264,8:00,15:29,310,"$467,131.00","$427,996.00"
SFO - ICT,52556327849,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52556327849,https://www.airlines-manager.com/aircraft/show/114912267,16:00,23:29,310,"$467,131.00","$427,996.00"
SFO - ICT,52561334759,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52561334759,https://www.airlines-manager.com/aircraft/show/114912306,17:30,0:59,112,"$220,541.00","$194,685.00"
SFO - ICT,52566418054,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034224,https://www.airlines-manager.com/network/showflight/52566418054,https://www.airlines-manager.com/aircraft/show/114912268,18:45,2:14,310,"$467,131.00","$427,996.00"
SFO - IND,52529309059,SFO-IND-CVG 4,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52529309059,https://www.airlines-manager.com/aircraft/show/99316503,5:15,14:59,310,"$602,840.00","$552,790.00"
SFO - IND,52529309060,SFO-IND-CVG 6,ERJ-175,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52529309060,https://www.airlines-manager.com/aircraft/show/99174346,7:15,16:59,112,"$283,025.00","$249,611.00"
SFO - IND,52551230634,SFO-IND-CVG 1,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52551230634,https://www.airlines-manager.com/aircraft/show/99316506,13:00,22:44,310,"$602,840.00","$552,790.00"
SFO - IND,52556327737,SFO-IND-CVG 3,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52556327737,https://www.airlines-manager.com/aircraft/show/99316504,15:00,0:44,310,"$602,840.00","$552,790.00"
SFO - IND,52561334733,SFO-IND-CVG 5,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52561334733,https://www.airlines-manager.com/aircraft/show/99316502,17:00,2:44,310,"$602,840.00","$552,790.00"
SFO - IND,52570802952,SFO-IND-CVG 2,A321-200,https://www.airlines-manager.com/network/showline/44876694,https://www.airlines-manager.com/network/showflight/52570802952,https://www.airlines-manager.com/aircraft/show/99316505,23:00,8:44,308,"$598,252.00","$548,334.00"
SFO - JAN,52529308613,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52529308613,https://www.airlines-manager.com/aircraft/show/114917486,2:15,11:29,198,"$437,507.00","$401,062.00"
SFO - JAN,52529308671,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52529308671,https://www.airlines-manager.com/aircraft/show/114912269,6:15,15:29,310,"$581,237.00","$535,780.00"
SFO - JAN,52543755393,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52543755393,https://www.airlines-manager.com/aircraft/show/114912266,7:45,16:59,310,"$581,237.00","$535,780.00"
SFO - JAN,52561334699,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52561334699,https://www.airlines-manager.com/aircraft/show/114912265,17:00,2:14,310,"$581,237.00","$535,780.00"
SFO - JAN,52566418068,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034208,https://www.airlines-manager.com/network/showflight/52566418068,https://www.airlines-manager.com/aircraft/show/114912270,19:00,4:14,310,"$581,237.00","$535,780.00"
SFO - JAX,52529309082,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52529309082,https://www.airlines-manager.com/aircraft/show/86377315,6:00,17:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52551230627,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52551230627,https://www.airlines-manager.com/aircraft/show/86375568,13:00,0:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52556327760,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52556327760,https://www.airlines-manager.com/aircraft/show/86371267,15:00,2:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52570802768,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52570802768,https://www.airlines-manager.com/aircraft/show/86385102,21:00,8:14,310,"$701,370.00","$646,301.00"
SFO - JAX,52570802769,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303043,https://www.airlines-manager.com/network/showflight/52570802769,https://www.airlines-manager.com/aircraft/show/86378760,23:00,10:14,310,"$701,370.00","$646,301.00"
SFO - JFK,52529308199,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52529308199,https://www.airlines-manager.com/aircraft/show/89233034,1:00,12:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52529308200,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52529308200,https://www.airlines-manager.com/aircraft/show/89233035,7:00,18:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52551230658,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52551230658,https://www.airlines-manager.com/aircraft/show/89233032,13:00,0:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52556327854,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52556327854,https://www.airlines-manager.com/aircraft/show/84622093,16:00,3:59,400,"$960,708.00","$862,210.00"
SFO - JFK,52566418074,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228411,https://www.airlines-manager.com/network/showflight/52566418074,https://www.airlines-manager.com/aircraft/show/89233031,19:00,6:59,399,"$959,240.00","$860,809.00"
SFO - KOA,52529308721,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52529308721,https://www.airlines-manager.com/aircraft/show/112650101,2:45,13:59,310,"$702,675.00","$647,803.00"
SFO - KOA,52529308722,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52529308722,https://www.airlines-manager.com/aircraft/show/112650100,4:45,15:59,310,"$702,675.00","$647,803.00"
SFO - KOA,52551230589,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52551230589,https://www.airlines-manager.com/aircraft/show/112650091,13:00,0:14,198,"$527,382.00","$483,383.00"
SFO - KOA,52561334702,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52561334702,https://www.airlines-manager.com/aircraft/show/112650103,17:00,4:14,310,"$702,675.00","$647,803.00"
SFO - KOA,52566418161,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344087,https://www.airlines-manager.com/network/showflight/52566418161,https://www.airlines-manager.com/aircraft/show/112650102,20:00,7:14,309,"$701,292.00","$646,485.00"
SFO - LAS,52529309077,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52529309077,https://www.airlines-manager.com/aircraft/show/104901564,6:00,9:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52529309078,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52529309078,https://www.airlines-manager.com/aircraft/show/104870960,7:00,10:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52551230494,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52551230494,https://www.airlines-manager.com/aircraft/show/104874465,12:00,15:44,338,"$216,921.00","$178,228.00"
SFO - LAS,52551230495,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52551230495,https://www.airlines-manager.com/aircraft/show/107343113,12:00,15:44,0,"$55,686.00","$30,496.00"
SFO - LAS,52561334662,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52561334662,https://www.airlines-manager.com/aircraft/show/104901544,16:30,20:14,338,"$216,921.00","$178,228.00"
SFO - LAS,52566418206,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/40459405,https://www.airlines-manager.com/network/showflight/52566418206,https://www.airlines-manager.com/aircraft/show/104864961,20:30,0:14,338,"$216,921.00","$178,228.00"
SFO - LAX,52529308560,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52529308560,https://www.airlines-manager.com/aircraft/show/97900730,2:00,5:29,198,"$133,250.00","$101,236.00"
SFO - LAX,52529308562,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52529308562,https://www.airlines-manager.com/aircraft/show/92390872,4:30,7:59,320,"$175,671.00","$128,460.00"
SFO - LAX,52543755380,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52543755380,https://www.airlines-manager.com/aircraft/show/92390869,7:30,10:59,320,"$175,671.00","$128,460.00"
SFO - LAX,52543755381,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52543755381,https://www.airlines-manager.com/aircraft/show/92390870,8:15,11:44,320,"$175,671.00","$128,460.00"
SFO - LAX,52551230497,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52551230497,https://www.airlines-manager.com/aircraft/show/92390873,12:00,15:29,320,"$175,671.00","$128,460.00"
SFO - LAX,52561334683,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41084093,https://www.airlines-manager.com/network/showflight/52561334683,https://www.airlines-manager.com/aircraft/show/92390871,16:45,20:14,320,"$175,671.00","$128,460.00"
SFO - LEX,52529308556,SFO-BTV-LEX 1,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52529308556,https://www.airlines-manager.com/aircraft/show/112650095,2:00,11:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52529308558,SFO-BTV-LEX 2,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52529308558,https://www.airlines-manager.com/aircraft/show/112650094,6:00,15:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52543755418,SFO-BTV-LEX 3,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52543755418,https://www.airlines-manager.com/aircraft/show/112650093,8:00,17:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52556327652,SFO-BTV-LEX 4,A321-200,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52556327652,https://www.airlines-manager.com/aircraft/show/112650092,14:00,23:59,310,"$622,649.00","$575,201.00"
SFO - LEX,52566418160,SFO-BTV-LEX 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344124,https://www.airlines-manager.com/network/showflight/52566418160,https://www.airlines-manager.com/aircraft/show/112650089,20:00,5:59,198,"$468,448.00","$430,402.00"
SFO - LIT,52529308601,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52529308601,https://www.airlines-manager.com/aircraft/show/94886627,2:15,10:59,310,"$540,388.00","$497,360.00"
SFO - LIT,52529308603,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52529308603,https://www.airlines-manager.com/aircraft/show/106453498,3:15,11:59,310,"$540,388.00","$497,360.00"
SFO - LIT,52556327660,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52556327660,https://www.airlines-manager.com/aircraft/show/94886628,14:00,22:44,310,"$540,388.00","$497,360.00"
SFO - LIT,52556327661,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52556327661,https://www.airlines-manager.com/aircraft/show/106453500,15:00,23:44,310,"$540,388.00","$497,360.00"
SFO - LIT,52573805939,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46472621,https://www.airlines-manager.com/network/showflight/52573805939,https://www.airlines-manager.com/aircraft/show/106453499,23:45,8:29,309,"$537,294.00","$494,335.00"
SFO - MCI,52529309175,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52529309175,https://www.airlines-manager.com/aircraft/show/88239554,7:00,14:59,320,"$504,933.00","$456,007.00"
SFO - MCI,52561334695,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52561334695,https://www.airlines-manager.com/aircraft/show/88239553,17:00,0:59,320,"$504,933.00","$456,007.00"
SFO - MCI,52561334696,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52561334696,https://www.airlines-manager.com/aircraft/show/105223003,17:00,0:59,198,"$380,833.00","$345,825.00"
SFO - MCI,52566418051,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52566418051,https://www.airlines-manager.com/aircraft/show/88239557,18:45,2:44,320,"$504,933.00","$456,007.00"
SFO - MCI,52573805898,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129471,https://www.airlines-manager.com/network/showflight/52573805898,https://www.airlines-manager.com/aircraft/show/88239555,23:15,7:14,320,"$504,933.00","$456,007.00"
SFO - MCO,52529308880,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52529308880,https://www.airlines-manager.com/aircraft/show/105367367,3:30,14:59,338,"$791,675.00","$726,706.00"
SFO - MCO,52529308881,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52529308881,https://www.airlines-manager.com/aircraft/show/105367364,4:30,15:59,338,"$791,675.00","$726,706.00"
SFO - MCO,52556327787,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52556327787,https://www.airlines-manager.com/aircraft/show/105367368,15:00,2:29,338,"$791,675.00","$726,706.00"
SFO - MCO,52561334721,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52561334721,https://www.airlines-manager.com/aircraft/show/105367365,17:00,4:29,338,"$791,675.00","$726,706.00"
SFO - MCO,52566418104,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52566418104,https://www.airlines-manager.com/aircraft/show/105367366,19:15,6:44,338,"$791,675.00","$726,706.00"
SFO - MCO,52566418105,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/41349629,https://www.airlines-manager.com/network/showflight/52566418105,https://www.airlines-manager.com/aircraft/show/107343113,20:30,7:59,0,"$198,796.00","$148,149.00"
SFO - MEM,52529308723,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52529308723,https://www.airlines-manager.com/aircraft/show/98788934,2:45,11:59,310,"$574,552.00","$525,828.00"
SFO - MEM,52529308724,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52529308724,https://www.airlines-manager.com/aircraft/show/98675305,5:45,14:59,112,"$269,715.00","$237,333.00"
SFO - MEM,52551230636,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52551230636,https://www.airlines-manager.com/aircraft/show/98788937,13:00,22:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52556327832,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52556327832,https://www.airlines-manager.com/aircraft/show/98788935,16:00,1:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52566418066,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52566418066,https://www.airlines-manager.com/aircraft/show/98788933,19:00,4:14,310,"$574,552.00","$525,828.00"
SFO - MEM,52573805940,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710521,https://www.airlines-manager.com/network/showflight/52573805940,https://www.airlines-manager.com/aircraft/show/98788936,23:45,8:59,308,"$569,625.00","$521,037.00"
SFO - MEX,52529308891,SFO-IAH-MEX 3,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52529308891,https://www.airlines-manager.com/aircraft/show/101045337,3:45,12:59,400,"$769,587.00","$698,720.00"
SFO - MEX,52551230629,SFO-IAH-MEX 2,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52551230629,https://www.airlines-manager.com/aircraft/show/101045338,13:00,22:14,400,"$769,587.00","$698,720.00"
SFO - MEX,52556327746,SFO-IAH-MEX 5,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52556327746,https://www.airlines-manager.com/aircraft/show/101045335,15:00,0:14,400,"$769,587.00","$698,720.00"
SFO - MEX,52570802789,SFO-IAH-MEX 1,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52570802789,https://www.airlines-manager.com/aircraft/show/101045339,21:15,6:29,400,"$769,587.00","$698,720.00"
SFO - MEX,52573805908,SFO-IAH-MEX 4,757-300,https://www.airlines-manager.com/network/showline/42730810,https://www.airlines-manager.com/network/showflight/52573805908,https://www.airlines-manager.com/aircraft/show/101045336,23:15,8:29,368,"$716,519.00","$647,617.00"
SFO - MHT,52529308013,SFO-MHT-CHS 3,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52529308013,https://www.airlines-manager.com/aircraft/show/114917463,0:15,12:44,320,"$758,602.00","$694,617.00"
SFO - MHT,52529308014,SFO-MHT-CHS 4,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52529308014,https://www.airlines-manager.com/aircraft/show/114266973,4:15,16:44,320,"$758,602.00","$694,617.00"
SFO - MHT,52551230582,SFO-MHT-CHS 1,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52551230582,https://www.airlines-manager.com/aircraft/show/114917465,13:00,1:29,320,"$758,602.00","$694,617.00"
SFO - MHT,52561334701,SFO-MHT-CHS 2,737-900ER,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52561334701,https://www.airlines-manager.com/aircraft/show/114917464,17:00,5:29,320,"$758,602.00","$694,617.00"
SFO - MHT,52566418182,SFO-MHT-CHS 5 B,A319-100,https://www.airlines-manager.com/network/showline/49035982,https://www.airlines-manager.com/network/showflight/52566418182,https://www.airlines-manager.com/aircraft/show/114912262,20:00,8:29,197,"$566,484.00","$519,661.00"
SFO - MIA,52529308191,SFO-MIA-JFK 1,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52529308191,https://www.airlines-manager.com/aircraft/show/89233032,1:00,12:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52529308192,SFO-MIA-JFK 2,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52529308192,https://www.airlines-manager.com/aircraft/show/84622093,4:00,15:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52529308193,SFO-MIA-JFK 3,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52529308193,https://www.airlines-manager.com/aircraft/show/89233031,7:00,18:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52551230657,SFO-MIA-JFK 4,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52551230657,https://www.airlines-manager.com/aircraft/show/89233034,13:00,0:59,400,"$954,169.00","$864,326.00"
SFO - MIA,52566418076,SFO-MIA-JFK 5,757-300,https://www.airlines-manager.com/network/showline/40228416,https://www.airlines-manager.com/network/showflight/52566418076,https://www.airlines-manager.com/aircraft/show/89233035,19:00,6:59,398,"$948,077.00","$858,418.00"
SFO - MKE,52529308048,SFO-CLE-MKE 1,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52529308048,https://www.airlines-manager.com/aircraft/show/92519368,0:30,9:44,320,"$583,418.00","$530,650.00"
SFO - MKE,52529308049,SFO-CLE-MKE 4,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52529308049,https://www.airlines-manager.com/aircraft/show/92519371,5:30,14:44,320,"$583,418.00","$530,650.00"
SFO - MKE,52529308050,SFO-CLE-MKE 3,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52529308050,https://www.airlines-manager.com/aircraft/show/92519367,6:45,15:59,320,"$583,418.00","$530,650.00"
SFO - MKE,52556327859,SFO-CLE-MKE 2,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52556327859,https://www.airlines-manager.com/aircraft/show/92519369,16:00,1:14,320,"$583,418.00","$530,650.00"
SFO - MKE,52561334849,SFO-CLE-MKE 5,737-900ER,https://www.airlines-manager.com/network/showline/45951021,https://www.airlines-manager.com/network/showflight/52561334849,https://www.airlines-manager.com/aircraft/show/92519370,18:00,3:14,320,"$583,418.00","$530,650.00"
SFO - MSO,52529309092,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52529309092,https://www.airlines-manager.com/aircraft/show/108410856,6:45,11:44,320,"$321,150.00","$287,439.00"
SFO - MSO,52543755364,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52543755364,https://www.airlines-manager.com/aircraft/show/108410859,7:30,12:29,320,"$321,150.00","$287,439.00"
SFO - MSO,52551230599,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52551230599,https://www.airlines-manager.com/aircraft/show/108410858,13:00,17:59,320,"$321,150.00","$287,439.00"
SFO - MSO,52570802782,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065671,https://www.airlines-manager.com/network/showflight/52570802782,https://www.airlines-manager.com/aircraft/show/108410857,21:00,1:59,265,"$287,772.00","$255,199.00"
SFO - MSP,52529308713,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52529308713,https://www.airlines-manager.com/aircraft/show/105367368,2:30,10:44,338,"$570,073.00","$520,635.00"
SFO - MSP,52529308714,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52529308714,https://www.airlines-manager.com/aircraft/show/105367365,4:30,12:44,338,"$570,073.00","$520,635.00"
SFO - MSP,52529308715,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52529308715,https://www.airlines-manager.com/aircraft/show/105367366,6:45,14:59,338,"$570,073.00","$520,635.00"
SFO - MSP,52556327789,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52556327789,https://www.airlines-manager.com/aircraft/show/105367367,15:00,23:14,338,"$570,073.00","$520,635.00"
SFO - MSP,52556327790,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708322,https://www.airlines-manager.com/network/showflight/52556327790,https://www.airlines-manager.com/aircraft/show/105367364,16:00,0:14,336,"$565,605.00","$516,266.00"
SFO - MSY,52529308763,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52529308763,https://www.airlines-manager.com/aircraft/show/103534666,3:00,12:29,112,"$278,394.00","$245,720.00"
SFO - MSY,52529308764,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52529308764,https://www.airlines-manager.com/aircraft/show/98075266,6:00,15:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52543755417,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52543755417,https://www.airlines-manager.com/aircraft/show/98075264,8:00,17:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52551230641,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52551230641,https://www.airlines-manager.com/aircraft/show/98075267,13:00,22:29,320,"$591,064.00","$536,830.00"
SFO - MSY,52570802809,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52570802809,https://www.airlines-manager.com/aircraft/show/98075265,21:15,6:44,320,"$591,064.00","$536,830.00"
SFO - MSY,52573805903,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531521,https://www.airlines-manager.com/network/showflight/52573805903,https://www.airlines-manager.com/aircraft/show/98075263,23:15,8:44,320,"$591,064.00","$536,830.00"
SFO - NRT,52529307825,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52529307825,https://www.airlines-manager.com/aircraft/show/85806656,0:00,20:29,932,"$3,433,804.00","$3,109,148.00"
SFO - NRT,52529307826,SFO 84A-3 E1,777-300,https://www.airlines-manager.com/network/showline/40456655,https://www.airlines-manager.com/network/showflight/52529307826,https://www.airlines-manager.com/aircraft/show/86776210,4:15,0:44,932,"$3,433,804.00","$3,109,148.00"
SFO - OGG,52529308681,SFO-OGG-AUS 5,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52529308681,https://www.airlines-manager.com/aircraft/show/92773477,2:30,13:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52551230667,SFO-OGG-AUS 1,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52551230667,https://www.airlines-manager.com/aircraft/show/92773481,13:30,0:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52556327806,SFO-OGG-AUS 2,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52556327806,https://www.airlines-manager.com/aircraft/show/92773480,15:30,2:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52570802818,SFO-OGG-AUS 3,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52570802818,https://www.airlines-manager.com/aircraft/show/92773479,21:30,8:44,310,"$694,538.00","$641,976.00"
SFO - OGG,52573805920,SFO-OGG-AUS 4,A321-200,https://www.airlines-manager.com/network/showline/45270812,https://www.airlines-manager.com/network/showflight/52573805920,https://www.airlines-manager.com/aircraft/show/92773478,23:30,10:44,310,"$694,538.00","$641,976.00"
SFO - OKC,52529308045,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52529308045,https://www.airlines-manager.com/aircraft/show/107160380,0:30,7:59,320,"$474,161.00","$429,919.00"
SFO - OKC,52543755402,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52543755402,https://www.airlines-manager.com/aircraft/show/107160379,8:00,15:29,320,"$474,161.00","$429,919.00"
SFO - OKC,52561334713,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52561334713,https://www.airlines-manager.com/aircraft/show/107160378,17:00,0:29,320,"$474,161.00","$429,919.00"
SFO - OKC,52566418014,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52566418014,https://www.airlines-manager.com/aircraft/show/107132310,18:30,1:59,112,"$223,932.00","$197,789.00"
SFO - OKC,52566418015,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719700,https://www.airlines-manager.com/network/showflight/52566418015,https://www.airlines-manager.com/aircraft/show/107160381,19:30,2:59,320,"$474,161.00","$429,919.00"
SFO - OMA,52529308176,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52529308176,https://www.airlines-manager.com/aircraft/show/88239553,1:00,8:44,320,"$482,778.00","$437,706.00"
SFO - OMA,52529308177,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52529308177,https://www.airlines-manager.com/aircraft/show/105223003,1:00,8:44,198,"$365,115.00","$332,780.00"
SFO - OMA,52529308178,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52529308178,https://www.airlines-manager.com/aircraft/show/88239557,2:45,10:29,320,"$482,778.00","$437,706.00"
SFO - OMA,52529308179,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52529308179,https://www.airlines-manager.com/aircraft/show/88239555,7:15,14:59,320,"$482,778.00","$437,706.00"
SFO - OMA,52556327728,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129452,https://www.airlines-manager.com/network/showflight/52556327728,https://www.airlines-manager.com/aircraft/show/88239554,15:00,22:44,320,"$482,778.00","$437,706.00"
SFO - ONT,52529309033,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52529309033,https://www.airlines-manager.com/aircraft/show/107160379,4:30,7:59,320,"$179,727.00","$149,594.00"
SFO - ONT,52551230604,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52551230604,https://www.airlines-manager.com/aircraft/show/107160378,13:00,16:29,320,"$179,727.00","$149,594.00"
SFO - ONT,52556327735,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52556327735,https://www.airlines-manager.com/aircraft/show/107132310,15:00,18:29,112,"$82,945.00","$66,822.00"
SFO - ONT,52556327736,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52556327736,https://www.airlines-manager.com/aircraft/show/107160381,16:00,19:29,320,"$179,727.00","$149,594.00"
SFO - ONT,52570802783,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719649,https://www.airlines-manager.com/network/showflight/52570802783,https://www.airlines-manager.com/aircraft/show/107160380,21:00,0:29,320,"$179,727.00","$149,594.00"
SFO - ORD,52529309083,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52529309083,https://www.airlines-manager.com/aircraft/show/101045333,6:00,14:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52543755382,SFO-ORD-DTW 5,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52543755382,https://www.airlines-manager.com/aircraft/show/101045330,7:30,16:29,400,"$756,824.00","$669,423.00"
SFO - ORD,52551230631,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52551230631,https://www.airlines-manager.com/aircraft/show/101045334,13:00,21:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52556327753,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52556327753,https://www.airlines-manager.com/aircraft/show/101045331,15:00,23:59,400,"$756,824.00","$669,423.00"
SFO - ORD,52566418158,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/40736837,https://www.airlines-manager.com/network/showflight/52566418158,https://www.airlines-manager.com/aircraft/show/101045332,20:00,4:59,400,"$756,824.00","$669,423.00"
SFO - ORF,52529309067,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52529309067,https://www.airlines-manager.com/aircraft/show/108328836,5:30,17:29,310,"$729,113.00","$673,001.00"
SFO - ORF,52543755365,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52543755365,https://www.airlines-manager.com/aircraft/show/108328837,7:30,19:29,310,"$729,113.00","$673,001.00"
SFO - ORF,52561334789,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52561334789,https://www.airlines-manager.com/aircraft/show/108328834,18:00,5:59,310,"$729,113.00","$673,001.00"
SFO - ORF,52566418173,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52566418173,https://www.airlines-manager.com/aircraft/show/108328835,20:00,7:59,310,"$729,113.00","$673,001.00"
SFO - ORF,52570802872,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065515,https://www.airlines-manager.com/network/showflight/52570802872,https://www.airlines-manager.com/aircraft/show/108328833,22:00,9:59,198,"$545,293.00","$500,294.00"
SFO - PBI,52529308923,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52529308923,https://www.airlines-manager.com/aircraft/show/100301186,4:15,16:14,320,"$730,565.00","$666,234.00"
SFO - PBI,52529308924,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52529308924,https://www.airlines-manager.com/aircraft/show/100301185,6:15,18:14,320,"$730,565.00","$666,234.00"
SFO - PBI,52561334731,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52561334731,https://www.airlines-manager.com/aircraft/show/100301188,17:00,4:59,320,"$730,565.00","$666,234.00"
SFO - PBI,52566418064,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52566418064,https://www.airlines-manager.com/aircraft/show/100301187,19:00,6:59,320,"$730,565.00","$666,234.00"
SFO - PBI,52570802785,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099085,https://www.airlines-manager.com/network/showflight/52570802785,https://www.airlines-manager.com/aircraft/show/100301184,21:00,8:59,320,"$730,565.00","$666,234.00"
SFO - PDX,52529307978,SFO-MCO-MSP 5,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52529307978,https://www.airlines-manager.com/aircraft/show/105367364,0:15,4:29,338,"$271,154.00","$241,757.00"
SFO - PDX,52543755642,SFO-MCO-MSP 1,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52543755642,https://www.airlines-manager.com/aircraft/show/105367368,10:45,14:59,338,"$271,154.00","$241,757.00"
SFO - PDX,52551230571,SFO-MCO-MSP 4,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52551230571,https://www.airlines-manager.com/aircraft/show/105367365,12:45,16:59,338,"$271,154.00","$241,757.00"
SFO - PDX,52556327788,SFO-MCO-MSP 3,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52556327788,https://www.airlines-manager.com/aircraft/show/105367366,15:00,19:14,338,"$271,154.00","$241,757.00"
SFO - PDX,52573805907,SFO-MCO-MSP 2,A321neo,https://www.airlines-manager.com/network/showline/42708309,https://www.airlines-manager.com/network/showflight/52573805907,https://www.airlines-manager.com/aircraft/show/105367367,23:15,3:29,269,"$238,462.00","$209,932.00"
SFO - PEK,52529308140,SFO 84A-4 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52529308140,https://www.airlines-manager.com/aircraft/show/86776213,0:45,0:14,932,"$3,796,237.00","$3,394,730.00"
SFO - PEK,52561334716,SFO-PEK E,787-10,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52561334716,https://www.airlines-manager.com/aircraft/show/106813006,17:00,15:59,648,"$2,826,020.00","$2,591,444.00"
SFO - PEK,52566418218,SFO 84A-7 E1,777-300,https://www.airlines-manager.com/network/showline/40333487,https://www.airlines-manager.com/network/showflight/52566418218,https://www.airlines-manager.com/aircraft/show/85806656,20:30,19:59,932,"$3,796,237.00","$3,394,730.00"
SFO - PHL,52529307843,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52529307843,https://www.airlines-manager.com/aircraft/show/92390871,0:00,11:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52551230516,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52551230516,https://www.airlines-manager.com/aircraft/show/92390872,12:00,23:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52556327674,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52556327674,https://www.airlines-manager.com/aircraft/show/97900730,14:00,1:59,198,"$546,382.00","$493,990.00"
SFO - PHL,52556327675,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52556327675,https://www.airlines-manager.com/aircraft/show/92390869,15:00,2:44,320,"$727,366.00","$654,814.00"
SFO - PHL,52556327676,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52556327676,https://www.airlines-manager.com/aircraft/show/92390870,15:45,3:29,320,"$727,366.00","$654,814.00"
SFO - PHL,52566418117,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/40229890,https://www.airlines-manager.com/network/showflight/52566418117,https://www.airlines-manager.com/aircraft/show/92390873,19:15,6:59,319,"$725,924.00","$653,440.00"
SFO - PHX,52529308335,SFO-BOS-PHX 1,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52529308335,https://www.airlines-manager.com/aircraft/show/104901564,1:30,5:59,338,"$320,579.00","$282,521.00"
SFO - PHX,52529308336,SFO-BOS-PHX 4,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52529308336,https://www.airlines-manager.com/aircraft/show/104870960,2:30,6:59,338,"$320,579.00","$282,521.00"
SFO - PHX,52529308337,SFO-BOS-PHX 3,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52529308337,https://www.airlines-manager.com/aircraft/show/104874465,4:15,8:44,338,"$320,579.00","$282,521.00"
SFO - PHX,52551230496,SFO-BOS-PHX 2,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52551230496,https://www.airlines-manager.com/aircraft/show/104901544,12:00,16:29,338,"$320,579.00","$282,521.00"
SFO - PHX,52556327812,SFO CARGO 1,737-700,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52556327812,https://www.airlines-manager.com/aircraft/show/107343113,15:45,20:29,0,"$78,259.00","$52,319.00"
SFO - PHX,52556327813,SFO-BOS-PHX 5,A321neo,https://www.airlines-manager.com/network/showline/42635167,https://www.airlines-manager.com/network/showflight/52556327813,https://www.airlines-manager.com/aircraft/show/104864961,16:00,20:29,338,"$320,579.00","$282,521.00"
SFO - PIT,52529308311,SFO-MEM-PIT 3,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52529308311,https://www.airlines-manager.com/aircraft/show/98788935,1:15,11:59,310,"$673,493.00","$618,337.00"
SFO - PIT,52529308312,SFO-MEM-PIT 5,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52529308312,https://www.airlines-manager.com/aircraft/show/98788933,4:15,14:59,310,"$673,493.00","$618,337.00"
SFO - PIT,52551230635,SFO-MEM-PIT 2,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52551230635,https://www.airlines-manager.com/aircraft/show/98788936,13:00,23:44,310,"$673,493.00","$618,337.00"
SFO - PIT,52556327831,SFO-MEM-PIT 4,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52556327831,https://www.airlines-manager.com/aircraft/show/98788934,16:00,2:44,310,"$673,493.00","$618,337.00"
SFO - PIT,52566418065,SFO-MEM-PIT 6,ERJ-175,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52566418065,https://www.airlines-manager.com/aircraft/show/98675305,19:00,5:44,112,"$315,768.00","$278,749.00"
SFO - PIT,52570802880,SFO-MEM-PIT 1,A321-200,https://www.airlines-manager.com/network/showline/44710524,https://www.airlines-manager.com/network/showflight/52570802880,https://www.airlines-manager.com/aircraft/show/98788937,22:15,8:59,310,"$673,493.00","$618,337.00"
SFO - PSP,52529308930,SFO-ICT-BFF 2,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52529308930,https://www.airlines-manager.com/aircraft/show/114912264,4:15,7:59,310,"$199,461.00","$174,663.00"
SFO - PSP,52551230482,SFO-ICT-BFF 1,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52551230482,https://www.airlines-manager.com/aircraft/show/114912267,11:45,15:29,310,"$199,461.00","$174,663.00"
SFO - PSP,52551230483,SFO-ICT-BFF 5,ERJ-175,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52551230483,https://www.airlines-manager.com/aircraft/show/114912306,13:15,16:59,112,"$92,078.00","$76,467.00"
SFO - PSP,52556327750,SFO-ICT-BFF 4,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52556327750,https://www.airlines-manager.com/aircraft/show/114912268,15:00,18:44,310,"$199,461.00","$174,663.00"
SFO - PSP,52570802761,SFO-ICT-BFF 3,A321-200,https://www.airlines-manager.com/network/showline/49034232,https://www.airlines-manager.com/network/showflight/52570802761,https://www.airlines-manager.com/aircraft/show/114912263,21:00,0:44,276,"$186,579.00","$162,172.00"
SFO - PVD,52529307877,SFO-PVD-BUF 4,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52529307877,https://www.airlines-manager.com/aircraft/show/112650105,0:00,12:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52529307878,SFO-PVD-BUF 5,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52529307878,https://www.airlines-manager.com/aircraft/show/112650104,5:00,17:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52551230591,SFO-PVD-BUF 1,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52551230591,https://www.airlines-manager.com/aircraft/show/112650108,13:00,1:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52561334703,SFO-PVD-BUF 2,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52561334703,https://www.airlines-manager.com/aircraft/show/112650107,17:00,5:29,310,"$759,976.00","$702,309.00"
SFO - PVD,52566418073,SFO-PVD-BUF 3,A321-200,https://www.airlines-manager.com/network/showline/48344018,https://www.airlines-manager.com/network/showflight/52566418073,https://www.airlines-manager.com/aircraft/show/112650106,19:00,7:29,309,"$758,491.00","$700,898.00"
SFO - PWM,52529307983,SFO-KOA-PWM 5 B,A319-100,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52529307983,https://www.airlines-manager.com/aircraft/show/112650091,0:15,12:59,198,"$574,346.00","$528,149.00"
SFO - PWM,52529307984,SFO-KOA-PWM 1,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52529307984,https://www.airlines-manager.com/aircraft/show/112650103,4:15,16:59,310,"$767,438.00","$709,838.00"
SFO - PWM,52529307985,SFO-KOA-PWM 2,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52529307985,https://www.airlines-manager.com/aircraft/show/112650102,7:15,19:59,310,"$767,438.00","$709,838.00"
SFO - PWM,52556327656,SFO-KOA-PWM 3,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52556327656,https://www.airlines-manager.com/aircraft/show/112650101,14:00,2:44,310,"$767,438.00","$709,838.00"
SFO - PWM,52556327657,SFO-KOA-PWM 4,A321-200,https://www.airlines-manager.com/network/showline/48344081,https://www.airlines-manager.com/network/showflight/52556327657,https://www.airlines-manager.com/aircraft/show/112650100,16:00,4:44,310,"$767,438.00","$709,838.00"
SFO - RDU,52529309052,SFO-PBI-RDU 1,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52529309052,https://www.airlines-manager.com/aircraft/show/100301188,5:00,16:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52529309053,SFO-PBI-RDU 2,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52529309053,https://www.airlines-manager.com/aircraft/show/100301187,7:00,18:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52543755504,SFO-PBI-RDU 5,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52543755504,https://www.airlines-manager.com/aircraft/show/100301184,9:00,20:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52561334730,SFO-PBI-RDU 3,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52561334730,https://www.airlines-manager.com/aircraft/show/100301186,17:00,4:14,320,"$709,558.00","$646,835.00"
SFO - RDU,52566418063,SFO-PBI-RDU 4,737-900ER,https://www.airlines-manager.com/network/showline/45099094,https://www.airlines-manager.com/network/showflight/52566418063,https://www.airlines-manager.com/aircraft/show/100301185,19:00,6:14,320,"$709,558.00","$646,835.00"
SFO - RIC,52529309081,SFO-ORF-RIC 1,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52529309081,https://www.airlines-manager.com/aircraft/show/108328834,6:00,17:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52543755408,SFO-ORF-RIC 2,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52543755408,https://www.airlines-manager.com/aircraft/show/108328835,8:00,19:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52543755409,SFO-ORF-RIC 5 B,A319-100,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52543755409,https://www.airlines-manager.com/aircraft/show/108328833,10:00,21:29,198,"$542,409.00","$498,277.00"
SFO - RIC,52561334790,SFO-ORF-RIC 3,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52561334790,https://www.airlines-manager.com/aircraft/show/108328836,18:00,5:29,310,"$723,204.00","$668,170.00"
SFO - RIC,52566418155,SFO-ORF-RIC 4,A321-200,https://www.airlines-manager.com/network/showline/47065521,https://www.airlines-manager.com/network/showflight/52566418155,https://www.airlines-manager.com/aircraft/show/108328837,20:00,7:29,310,"$723,204.00","$668,170.00"
SFO - RNO,52529309021,SFO-MCI-OMA 2,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52529309021,https://www.airlines-manager.com/aircraft/show/88239554,4:15,6:59,320,"$118,923.00","$92,603.00"
SFO - RNO,52556327701,SFO-MCI-OMA 5 B,A319-100,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52556327701,https://www.airlines-manager.com/aircraft/show/105223003,14:15,16:59,198,"$90,023.00","$72,171.00"
SFO - RNO,52556327702,SFO-MCI-OMA 1,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52556327702,https://www.airlines-manager.com/aircraft/show/88239553,14:15,16:59,320,"$118,923.00","$92,603.00"
SFO - RNO,52556327703,SFO-MCI-OMA 4,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52556327703,https://www.airlines-manager.com/aircraft/show/88239557,16:00,18:44,320,"$118,923.00","$92,603.00"
SFO - RNO,52566418207,SFO-MCI-OMA 3,737-900ER,https://www.airlines-manager.com/network/showline/46129438,https://www.airlines-manager.com/network/showflight/52566418207,https://www.airlines-manager.com/aircraft/show/88239555,20:30,23:14,320,"$118,923.00","$92,603.00"
SFO - RSW,52529309055,SFO-RSW-BDL 3,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52529309055,https://www.airlines-manager.com/aircraft/show/84915100,5:15,16:59,320,"$726,799.00","$661,985.00"
SFO - RSW,52529309056,SFO-RSW-BDL 4,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52529309056,https://www.airlines-manager.com/aircraft/show/84915101,7:15,18:59,320,"$726,799.00","$661,985.00"
SFO - RSW,52561334707,SFO-RSW-BDL 1,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52561334707,https://www.airlines-manager.com/aircraft/show/84915098,17:00,4:44,320,"$726,799.00","$661,985.00"
SFO - RSW,52566418079,SFO-RSW-BDL 2,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52566418079,https://www.airlines-manager.com/aircraft/show/84915099,19:00,6:44,320,"$726,799.00","$661,985.00"
SFO - RSW,52570802781,SFO-RSW-BDL 5,737-900ER,https://www.airlines-manager.com/network/showline/47540536,https://www.airlines-manager.com/network/showflight/52570802781,https://www.airlines-manager.com/aircraft/show/84915102,21:00,8:44,320,"$726,799.00","$661,985.00"
SFO - SAN,52543755413,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52543755413,https://www.airlines-manager.com/aircraft/show/92390872,8:00,11:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52543755414,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52543755414,https://www.airlines-manager.com/aircraft/show/92390869,11:00,14:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52551230551,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52551230551,https://www.airlines-manager.com/aircraft/show/92390870,12:00,15:44,320,"$216,405.00","$183,566.00"
SFO - SAN,52556327807,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52556327807,https://www.airlines-manager.com/aircraft/show/92390873,15:30,19:14,320,"$216,405.00","$183,566.00"
SFO - SAN,52566418199,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/42627058,https://www.airlines-manager.com/network/showflight/52566418199,https://www.airlines-manager.com/aircraft/show/92390871,20:15,23:59,313,"$213,545.00","$180,790.00"
SFO - SAT,52529308000,SFO-JAX-SAT 1,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52529308000,https://www.airlines-manager.com/aircraft/show/86375568,0:15,8:14,310,"$496,292.00","$455,022.00"
SFO - SAT,52529308001,SFO-JAX-SAT 2,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52529308001,https://www.airlines-manager.com/aircraft/show/86371267,2:15,10:14,310,"$496,292.00","$455,022.00"
SFO - SAT,52551230626,SFO-JAX-SAT 3,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52551230626,https://www.airlines-manager.com/aircraft/show/86385102,13:00,20:59,310,"$496,292.00","$455,022.00"
SFO - SAT,52556327745,SFO-JAX-SAT 4,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52556327745,https://www.airlines-manager.com/aircraft/show/86378760,15:00,22:59,310,"$496,292.00","$455,022.00"
SFO - SAT,52561334749,SFO-JAX-SAT 5,A321-200,https://www.airlines-manager.com/network/showline/45303038,https://www.airlines-manager.com/network/showflight/52561334749,https://www.airlines-manager.com/aircraft/show/86377315,17:15,1:14,310,"$496,292.00","$455,022.00"
SFO - SAV,52529309076,SFO-SAV-JAN 1,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52529309076,https://www.airlines-manager.com/aircraft/show/114912265,5:45,16:59,310,"$693,394.00","$640,089.00"
SFO - SAV,52543755391,SFO-SAV-JAN 4,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52543755391,https://www.airlines-manager.com/aircraft/show/114912270,7:45,18:59,310,"$693,394.00","$640,089.00"
SFO - SAV,52556327784,SFO-SAV-JAN 5 B,A319-100,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52556327784,https://www.airlines-manager.com/aircraft/show/114917486,15:00,2:14,198,"$520,994.00","$478,249.00"
SFO - SAV,52566418069,SFO-SAV-JAN 3,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52566418069,https://www.airlines-manager.com/aircraft/show/114912269,19:00,6:14,310,"$693,394.00","$640,089.00"
SFO - SAV,52566418070,SFO-SAV-JAN 2,A321-200,https://www.airlines-manager.com/network/showline/49034205,https://www.airlines-manager.com/network/showflight/52566418070,https://www.airlines-manager.com/aircraft/show/114912266,20:30,7:44,309,"$691,405.00","$638,181.00"
SFO - SDF,52529308313,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52529308313,https://www.airlines-manager.com/aircraft/show/94886628,1:15,10:59,310,"$611,616.00","$561,373.00"
SFO - SDF,52529308314,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52529308314,https://www.airlines-manager.com/aircraft/show/106453500,2:15,11:59,310,"$611,616.00","$561,373.00"
SFO - SDF,52556327658,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52556327658,https://www.airlines-manager.com/aircraft/show/106453499,14:00,23:44,310,"$611,616.00","$561,373.00"
SFO - SDF,52561334667,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52561334667,https://www.airlines-manager.com/aircraft/show/94886627,16:30,2:14,310,"$611,616.00","$561,373.00"
SFO - SDF,52561334668,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46473760,https://www.airlines-manager.com/network/showflight/52561334668,https://www.airlines-manager.com/aircraft/show/106453498,17:30,3:14,310,"$611,616.00","$561,373.00"
SFO - SEA,52529308746,SFO-PHL-SEA 5,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52529308746,https://www.airlines-manager.com/aircraft/show/92390869,2:45,7:29,320,"$300,057.00","$256,449.00"
SFO - SEA,52529308747,SFO-PHL-SEA 4,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52529308747,https://www.airlines-manager.com/aircraft/show/92390870,3:30,8:14,320,"$300,057.00","$256,449.00"
SFO - SEA,52529308748,SFO-PHL-SEA 6 B,A319-100,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52529308748,https://www.airlines-manager.com/aircraft/show/97900730,5:30,10:14,198,"$228,794.00","$198,636.00"
SFO - SEA,52529308749,SFO-PHL-SEA 3,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52529308749,https://www.airlines-manager.com/aircraft/show/92390873,7:00,11:44,320,"$300,057.00","$256,449.00"
SFO - SEA,52551230524,SFO-PHL-SEA 2,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52551230524,https://www.airlines-manager.com/aircraft/show/92390871,12:00,16:44,320,"$300,057.00","$256,449.00"
SFO - SEA,52573805931,SFO-PHL-SEA 1,737-900ER,https://www.airlines-manager.com/network/showline/41349632,https://www.airlines-manager.com/network/showflight/52573805931,https://www.airlines-manager.com/aircraft/show/92390872,23:45,4:29,297,"$287,039.00","$243,852.00"
SFO - SHA,52566418170,SFO 168B-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52566418170,https://www.airlines-manager.com/aircraft/show/87933798,20:00,19:59,1046,"$4,630,516.00","$4,294,983.00"
SFO - SHA,52570802868,SFO 168A-4 B,747-400,https://www.airlines-manager.com/network/showline/44204901,https://www.airlines-manager.com/network/showflight/52570802868,https://www.airlines-manager.com/aircraft/show/86817628,22:00,21:59,1045,"$4,627,327.00","$4,291,985.00"
SFO - SLC,52529307865,SFO-ORD-DTW 4,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52529307865,https://www.airlines-manager.com/aircraft/show/101045331,0:00,4:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52529307866,SFO-ORD-DTW 2,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52529307866,https://www.airlines-manager.com/aircraft/show/101045333,1:00,5:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52543755416,SFO-ORD-DTW 1,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52543755416,https://www.airlines-manager.com/aircraft/show/101045334,8:00,12:29,400,"$360,461.00","$319,560.00"
SFO - SLC,52556327778,SFO-ORD-DTW 3,757-300,https://www.airlines-manager.com/network/showline/42739134,https://www.airlines-manager.com/network/showflight/52556327778,https://www.airlines-manager.com/aircraft/show/101045332,15:00,19:29,400,"$360,461.00","$319,560.00"
SFO - SMF,52543755450,SFO-SDF-LIT 1,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52543755450,https://www.airlines-manager.com/aircraft/show/106453499,8:30,10:59,310,"$82,755.00","$62,173.00"
SFO - SMF,52556327662,SFO-SDF-LIT 3,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52556327662,https://www.airlines-manager.com/aircraft/show/94886627,14:00,16:29,310,"$82,755.00","$62,173.00"
SFO - SMF,52556327663,SFO-SDF-LIT 5,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52556327663,https://www.airlines-manager.com/aircraft/show/106453498,15:00,17:29,310,"$82,755.00","$62,173.00"
SFO - SMF,52570802917,SFO-SDF-LIT 2,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52570802917,https://www.airlines-manager.com/aircraft/show/94886628,22:45,1:14,310,"$82,755.00","$62,173.00"
SFO - SMF,52573805937,SFO-SDF-LIT 4,A321-200,https://www.airlines-manager.com/network/showline/46503390,https://www.airlines-manager.com/network/showflight/52573805937,https://www.airlines-manager.com/aircraft/show/106453500,23:45,2:14,310,"$82,755.00","$62,173.00"
SFO - STL,52529309090,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52529309090,https://www.airlines-manager.com/aircraft/show/98075265,6:45,15:29,320,"$554,913.00","$501,159.00"
SFO - STL,52543755475,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52543755475,https://www.airlines-manager.com/aircraft/show/98075263,8:45,17:29,320,"$554,913.00","$501,159.00"
SFO - STL,52551230592,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52551230592,https://www.airlines-manager.com/aircraft/show/103534666,13:00,21:44,112,"$261,240.00","$229,318.00"
SFO - STL,52556327834,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52556327834,https://www.airlines-manager.com/aircraft/show/98075266,16:00,0:44,320,"$554,913.00","$501,159.00"
SFO - STL,52561334786,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52561334786,https://www.airlines-manager.com/aircraft/show/98075264,18:00,2:44,320,"$554,913.00","$501,159.00"
SFO - STL,52570802901,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531548,https://www.airlines-manager.com/network/showflight/52570802901,https://www.airlines-manager.com/aircraft/show/98075267,22:30,7:14,319,"$551,748.00","$498,064.00"
SFO - TFU,52551230564,SFO 168B-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52551230564,https://www.airlines-manager.com/aircraft/show/87566902,12:30,14:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TFU,52556327712,SFO 168A-3 B,747-400,https://www.airlines-manager.com/network/showline/45364033,https://www.airlines-manager.com/network/showflight/52556327712,https://www.airlines-manager.com/aircraft/show/86483501,14:30,16:59,1046,"$5,210,426.00","$4,802,767.00"
SFO - TPA,52529308212,SFO-FLL-TPA 1,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52529308212,https://www.airlines-manager.com/aircraft/show/97955544,1:00,12:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52529308213,SFO-FLL-TPA 3,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52529308213,https://www.airlines-manager.com/aircraft/show/97955542,5:00,16:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52543755396,SFO-FLL-TPA 5,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52543755396,https://www.airlines-manager.com/aircraft/show/97955540,8:00,19:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52551230642,SFO-FLL-TPA 2,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52551230642,https://www.airlines-manager.com/aircraft/show/97955543,13:00,0:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52561334735,SFO-FLL-TPA 4,737-900ER,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52561334735,https://www.airlines-manager.com/aircraft/show/97955541,17:00,4:14,320,"$701,119.00","$635,068.00"
SFO - TPA,52566418183,SFO-FLL-TPA 6 B,A319-100,https://www.airlines-manager.com/network/showline/44446761,https://www.airlines-manager.com/network/showflight/52566418183,https://www.airlines-manager.com/aircraft/show/97900729,20:00,7:29,198,"$529,219.00","$481,363.00"
SFO - TPE,52566418168,SFO 168B-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52566418168,https://www.airlines-manager.com/aircraft/show/87933799,20:00,21:14,1046,"$4,754,947.00","$4,404,921.00"
SFO - TPE,52570802869,SFO 168A-5 B,747-400,https://www.airlines-manager.com/network/showline/40932049,https://www.airlines-manager.com/network/showflight/52570802869,https://www.airlines-manager.com/aircraft/show/86808589,22:00,23:14,1026,"$4,691,357.00","$4,345,338.00"
SFO - TUL,52529309034,SFO-TUL-DSM 2,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52529309034,https://www.airlines-manager.com/aircraft/show/108410857,4:45,12:29,320,"$491,552.00","$446,054.00"
SFO - TUL,52529309035,SFO-TUL-DSM 5,ERJ-175,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52529309035,https://www.airlines-manager.com/aircraft/show/108466264,7:00,14:44,112,"$232,107.00","$205,099.00"
SFO - TUL,52556327763,SFO-TUL-DSM 1,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52556327763,https://www.airlines-manager.com/aircraft/show/108410856,15:00,22:44,320,"$491,552.00","$446,054.00"
SFO - TUL,52556327764,SFO-TUL-DSM 4,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52556327764,https://www.airlines-manager.com/aircraft/show/108410859,15:45,23:29,320,"$491,552.00","$446,054.00"
SFO - TUL,52566418228,SFO-TUL-DSM 3,737-900ER,https://www.airlines-manager.com/network/showline/47065674,https://www.airlines-manager.com/network/showflight/52566418228,https://www.airlines-manager.com/aircraft/show/108410858,20:45,4:29,320,"$491,552.00","$446,054.00"
SFO - TUS,52543755410,SFO-OKC-FSD 1,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52543755410,https://www.airlines-manager.com/aircraft/show/107160378,8:00,12:59,320,"$317,941.00","$282,780.00"
SFO - TUS,52543755411,SFO-OKC-FSD 5,ERJ-175,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52543755411,https://www.airlines-manager.com/aircraft/show/107132310,9:30,14:29,112,"$151,535.00","$131,768.00"
SFO - TUS,52543755412,SFO-OKC-FSD 4,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52543755412,https://www.airlines-manager.com/aircraft/show/107160381,10:30,15:29,320,"$317,941.00","$282,780.00"
SFO - TUS,52556327830,SFO-OKC-FSD 3,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52556327830,https://www.airlines-manager.com/aircraft/show/107160380,16:00,20:59,320,"$317,941.00","$282,780.00"
SFO - TUS,52573805916,SFO-OKC-FSD 2,737-900ER,https://www.airlines-manager.com/network/showline/46719652,https://www.airlines-manager.com/network/showflight/52573805916,https://www.airlines-manager.com/aircraft/show/107160379,23:30,4:29,320,"$317,941.00","$282,780.00"
SFO - YUL,52529308142,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52529308142,https://www.airlines-manager.com/aircraft/show/115413609,0:45,12:29,400,"$922,179.00","$846,155.00"
SFO - YUL,52529308143,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52529308143,https://www.airlines-manager.com/aircraft/show/115413612,6:00,17:44,400,"$922,179.00","$846,155.00"
SFO - YUL,52556327624,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52556327624,https://www.airlines-manager.com/aircraft/show/115413610,14:00,1:44,400,"$922,179.00","$846,155.00"
SFO - YUL,52561334693,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52561334693,https://www.airlines-manager.com/aircraft/show/115413611,16:45,4:29,400,"$922,179.00","$846,155.00"
SFO - YUL,52566418055,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174523,https://www.airlines-manager.com/network/showflight/52566418055,https://www.airlines-manager.com/aircraft/show/91126653,18:45,6:29,400,"$922,179.00","$846,155.00"
SFO - YVR,52529308053,SFO-MSY-STL 2,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52529308053,https://www.airlines-manager.com/aircraft/show/98075266,0:45,5:59,320,"$329,974.00","$289,011.00"
SFO - YVR,52529308134,SFO-MSY-STL 4,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52529308134,https://www.airlines-manager.com/aircraft/show/98075264,2:45,7:59,320,"$329,974.00","$289,011.00"
SFO - YVR,52529308135,SFO-MSY-STL 1,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52529308135,https://www.airlines-manager.com/aircraft/show/98075267,7:15,12:29,320,"$329,974.00","$289,011.00"
SFO - YVR,52556327833,SFO-MSY-STL 3,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52556327833,https://www.airlines-manager.com/aircraft/show/98075265,16:00,21:14,320,"$329,974.00","$289,011.00"
SFO - YVR,52561334837,SFO-MSY-STL 5,737-900ER,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52561334837,https://www.airlines-manager.com/aircraft/show/98075263,18:00,23:14,320,"$329,974.00","$289,011.00"
SFO - YVR,52570802848,SFO-MSY-STL 6,ERJ-175,https://www.airlines-manager.com/network/showline/44531535,https://www.airlines-manager.com/network/showflight/52570802848,https://www.airlines-manager.com/aircraft/show/103534666,21:45,2:59,112,"$156,406.00","$133,592.00"
SFO - YYZ,52529308462,SFO-YYZ-YUL 2,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52529308462,https://www.airlines-manager.com/aircraft/show/115413610,1:45,12:29,400,"$881,683.00","$803,563.00"
SFO - YYZ,52529308464,SFO-YYZ-YUL 3,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52529308464,https://www.airlines-manager.com/aircraft/show/115413611,6:00,16:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52543755403,SFO-YYZ-YUL 5,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52543755403,https://www.airlines-manager.com/aircraft/show/91126653,8:00,18:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52556327625,SFO-YYZ-YUL 1,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52556327625,https://www.airlines-manager.com/aircraft/show/115413609,14:00,0:44,400,"$881,683.00","$803,563.00"
SFO - YYZ,52561334772,SFO-YYZ-YUL 4,757-300,https://www.airlines-manager.com/network/showline/49174519,https://www.airlines-manager.com/network/showflight/52561334772,https://www.airlines-manager.com/aircraft/show/115413612,17:45,4:29,400,"$881,683.00","$803,563.00"`;