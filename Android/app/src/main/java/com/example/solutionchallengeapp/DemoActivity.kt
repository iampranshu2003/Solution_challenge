package com.example.solutionchallengeapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import androidx.core.content.ContextCompat
import androidx.viewpager2.widget.ViewPager2

class DemoActivity : AppCompatActivity() {
    private val IntroSliderAdapter = IntroSliderAdapter(
        listOf(
            IntroSlide(
                "Shopping List",
                "Create personalized shopping\n" +
                        " lists for your eco-friendly \n" +
                        "choices with ease.",
                R.drawable.demo1
            ),
            IntroSlide(
                "Green Scanner",
                " Identifying eco-friendly and carbon-neutral products for informed, sustainable choices",
                R.drawable.demo2
            ),
            IntroSlide(
                "Community Page",
                "Join a community of eco-conscious shoppers, share tips, and make a collective impact.\n" +
                        "\n" +
                        "Connect with green warriors, share eco wins, shop smarter together.",
                R.drawable.demo3
            )
        )
    )
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_demo)
        val introSliderViewPager = findViewById<ViewPager2>(R.id.introSliderViewPager)
        introSliderViewPager.adapter = IntroSliderAdapter
        setupIndicators()
        setCurrentIndicator(0)
        introSliderViewPager.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                setCurrentIndicator(position)
            }
        })

    }
    private fun setupIndicators() {
        val indicatorsContainer = findViewById<LinearLayout>(R.id.indicatorLayout)
        val indicators = arrayOfNulls<ImageView>(IntroSliderAdapter.itemCount)
        val layoutParams: LinearLayout.LayoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.WRAP_CONTENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        layoutParams.setMargins(8, 0, 8, 0)
        for (i in indicators.indices) {
            indicators[i] = ImageView(applicationContext)
            indicators[i].apply {
                this?.setImageDrawable(
                    ContextCompat.getDrawable(
                        applicationContext,
                        R.drawable.indicator_inactive
                    )
                )
                this?.layoutParams = layoutParams
            }
            indicatorsContainer.addView(indicators[i])
        }
    }

    private fun setCurrentIndicator(index: Int) {
        val childCount = findViewById<LinearLayout>(R.id.indicatorLayout).childCount
        for (i in 0 until childCount) {
            val imageView = findViewById<LinearLayout>(R.id.indicatorLayout).getChildAt(i) as ImageView
            if (i == index) {
                imageView.setImageDrawable(
                    ContextCompat.getDrawable(
                        applicationContext,
                        R.drawable.idicator_active
                    )
                )
            } else {
                imageView.setImageDrawable(
                    ContextCompat.getDrawable(
                        applicationContext,
                        R.drawable.indicator_inactive
                    )
                )
            }
        }
    }

}