// Import icons from lucide-react (add this package if you don't have it)
import { 
  Users, 
  GraduationCap, 
  Tractor, 
  TrendingUp, 
  HeartHandshake, 
  CheckCircle 
} from "lucide-react";
import Image from "next/image";

// Simple inline Button definition (using red from your other component)
const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
    <button 
        className={`bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-base font-bold rounded-full shadow-lg transition-shadow hover:shadow-xl ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default function About() {
  return (
    <div className="bg-white">
      
      {/* SECTION 1: HERO & "HE MAN" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About Hon. Dozie Ferdinand Nwankwo (Onye Ndozi)
            </h1>
            <p className="text-xl text-red-600 font-semibold">
              A Journey of Service, Purpose, and People-Centered Leadership.
            </p>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                Hon. Dozie Nwankwo, fondly called Onye Ndozi, is a visionary leader, accomplished legislator, and compassionate humanitarian whose life reflects an unbroken commitment to service and community transformation.
              </p>
              <p>
                A proud son of Enugwu-Ukwu in Njikoka Local Government Area, Anambra Central, he has become a symbol of integrity, accessibility, and progressive leadership in modern Anambra politics.
              </p>
              <p>
                As a former Member of the House of Representatives, he built a reputation as a grassroots mobilizer who connects the government to the governed through transparency, accountability, and empathy.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full w-full rounded-2xl shadow-2xl overflow-hidden">
            {/* TODO: Replace this placeholder with an actual image of Hon. Dozie Nwankwo.
              Make sure the image is in your /public folder or sourced from a CMS.
            */}
            <Image
             src="/hero_dozie_flag.jpg"// <-- REPLACE THIS
              alt="Hon. Dozie Ferdinand Nwankwo"
              layout="fill"
              objectFit="cover"
              className="border-4 border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE VISION */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              THE VISION
            </h2>
            <p className="text-lg text-gray-700">
              Rt. Hon. Dozie Nwankwo’s vision is rooted in inclusive, transparent, and people-driven governance. He believes leadership should be about creating opportunities, not promises.
            </p>
          </div>

          {/* 5 Pillars Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Governance</h3>
              <p className="text-sm text-gray-600">A leadership model that listens, engages, and represents every voice.</p>
            </div>
            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <GraduationCap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Empowerment</h3>
              <p className="text-sm text-gray-600">Access to quality education, skill development, and financial inclusion.</p>
            </div>
            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Tractor className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Infrastructure</h3>
              <p className="text-sm text-gray-600">Driving development of roads, schools, hospitals, and digital hubs.</p>
            </div>
            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Economic Prosperity</h3>
              <p className="text-sm text-gray-600">Supporting entrepreneurship and attracting investments for local communities.</p>
            </div>
            {/* Pillar 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <HeartHandshake className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peace and Unity</h3>
              <p className="text-sm text-gray-600">Building bridges across political, ethnic, and religious divides.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <blockquote className="max-w-2xl mx-auto text-xl italic font-medium text-gray-800">
              <p>“Leadership is not about power; it is about purpose. When people trust you with their mandate, you owe them progress.”</p>
              <cite className="block text-right not-italic text-base font-semibold text-gray-700 mt-2">- Hon. Dozie Nwankwo</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE ACHIEVEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            THE ACHIEVEMENT
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Hon. Dozie Nwankwo’s record as a federal lawmaker and community leader speaks for itself—a legacy built on impact, integrity, and inclusion. During his time in the National Assembly, his focus remained on legislative impact, grassroots development, and empowerment for all.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Achievements Include:</h3>
          
          <ul className="space-y-5">
            {[
              "Sponsored and co-sponsored bills promoting youth empowerment, education reform, healthcare access, and community development.",
              "Delivered rural roads, solar-powered street lights, boreholes, and renovated schools across Dunukofia, Njikoka, and Anaocha.",
              "Awarded scholarships to hundreds of students and equipped schools with ICT tools, libraries, and learning materials.",
              "Provided free medical missions offering treatments, surgeries, and health awareness programs to thousands.",
              "Trained and empowered women and youths in tailoring, ICT, agriculture, and small-scale businesses with startup grants and tools.",
              "Remained accessible and present at the grassroots, listening, responding, and delivering results."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-12 border-l-4 border-red-600 bg-red-50 p-6 italic">
            <p className="text-xl font-medium text-red-900">
              True leadership is not measured by promises made but by lives transformed.
            </p>
          </blockquote>
        </div>
      </section>

      {/* SECTION 4: THE MOVEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] w-full rounded-2xl shadow-2xl overflow-hidden order-last lg:order-first">
            {/* TODO: Replace this placeholder with another image.
              Maybe one showing community engagement.
            */}
            <Image
              src="/hero_dozie_flag.jpg"// <-- REPLACE THIS
              alt="Hon. Dozie Nwankwo with the community"
              layout="fill"
              objectFit="cover"
              className="border-4 border-gray-100"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              THE MOVEMENT
            </h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                The Movement embodies the inspiring journey of Rt. Hon. Dozie Nwankwo, a man who has redefined what it means to serve with humility, integrity, and results. His story is not just political. It is a testament to dedication, compassion, and people-centered governance.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 pt-2">A Political Journey Built on Service</h4>
              <p>
                From his earliest days in community service, Rt. Hon. Nwankwo has always believed that leadership is about making lives better. Guided by empathy, discipline, and purpose, he has shown that power is not to be possessed but used to transform society.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 pt-2">Partnerships and Collaborations</h4>
              <p>
                Hon. Dozie Nwankwo understands that true progress is collective. His leadership style promotes collaboration and inclusion, working seamlessly with community leaders, traditional institutions, religious bodies, and youth organizations.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-red-600 bg-red-50 p-6 italic">
              <p className="text-xl font-medium text-red-900">
                His leadership is not built on rhetoric but on relationships, results, and resolve. A movement founded on service and sustained by trust.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 5: JOIN THE MOVEMENT (CTA) */}
      {/* <section className="bg-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Hon. Dozie Nwankwo’s journey continues—a movement built on faith, humility, and service to humanity. Together, we can build a future anchored on trust, empowerment, and shared prosperity.
          </p>
          <p className="text-2xl font-semibold tracking-wider text-blue-50">
            Follow the Movement. Believe in the Vision. Be part of the Change.
          </p> */}
          {/* You could add a button here linking to social media or a contact page */}
          {/* <div className="mt-10">
            <Button>
              Get Involved
            </Button>
          </div>
          */}
        {/* </div>
      </section> */}

    </div>
  )
}
