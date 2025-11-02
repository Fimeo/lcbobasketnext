import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {Calendar, ExternalLink} from "lucide-react";
import {motion} from "motion/react";
import {News} from "@/data/news";
import styles from './news.module.css';

type NewsCardsProps = {
    news: News;
    index: number;
}

export default function NewsCard({news, index}:NewsCardsProps) {
    return (
        <motion.div
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{delay: index * 0.1, duration: 0.5}}
            className={styles.container}
        >
            <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                {news.image && (
                    <div className="overflow-hidden">
                        <Link href={news.link} target="_blank">
                            <Image
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover hover:scale-98 rounded-md transition-transform duration-300"
                            />
                        </Link>
                    </div>
                )}
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                        <Calendar size={16}/>
                        <span className="text-red-600 text-sm">{news.date}</span>
                    </div>
                    <h3 className="mb-2 text-black">{news.title}</h3>
                    {news.location && (
                        <p className="text-black mb-2">{news.location}</p>
                    )}
                    {news.description}
                    {news.link && (
                        <Link
                            href={news.link} target="_blank"
                            className="inline-flex items-center gap-2 mt-2 text-red-600 hover:text-red-700 transition-colors"
                        >
                            <span>Voir sur Instagram</span>
                            <ExternalLink size={20}/>
                        </Link>
                    )
                    }
                </CardContent>
            </Card>
        </motion.div>
    )

}